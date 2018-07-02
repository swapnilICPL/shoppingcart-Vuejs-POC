<template>
    <form class="margin-20">
        <ul class="wrapper">
            <li class="form-row">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name">
            </li>
            <li class="form-row">
            <label for="townborn">Description</label>
            <input type="text" id="townborn" v-model="description">
            </li>
            <li class="form-row">
            <label for="email">Image URL</label>
            <input type="text" id="email" v-model="image">
            </li>
            <li class="form-row">
            <label for="email">Price</label>
            <input type="number" id="price" v-model="price">
            </li>
            <li class="form-row">
            <button type="submit" @click.prevent="submitted">Submit</button>
            </li>
        </ul>
    </form> 
</template>

<script>
import {service} from '../dataservice'
export default {
  data() {
    return {
      name: "",
      description: "",
      image: "",
      price: 0
    };
  },
  methods: {
    submitted() {

      const formData = {
        name: this.name,
        description: this.name,
        image: this.image,
        price: this.price
      };
      console.log(formData);
   
      service.postProduct(formData)
      .then(res=>{
          console.log(res)
          if(res.status == 200){
              alert('Product Posted Successfully');
              this.resetData();
          }      
          })
      .catch(error=>{console.log(error)})
    },
    resetData(){
        this.name ="";
        this.description ="";
        this.image ="";
        this.price = 0;

    }
  }
};
</script>
<style scoped>
.wrapper {
  background-color: whitesmoke;
  list-style-type: none;
  padding: 0;
  border-radius: 3px;
}
.form-row {
  display: flex;
  justify-content: flex-end;
  padding: 0.5em;
}
.form-row > label {
  padding: 0.5em 1em 0.5em 0;
  flex: 1;
}
.form-row > input {
  flex: 2;
}
.form-row > input,
.form-row > button {
  padding: 0.5em;
}
.form-row > button {
  background: gray;
  color: white;
  border: 0;
}
</style>

