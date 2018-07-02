<template>
    <form class="margin-20">
        <ul class="wrapper">
            <li class="form-row">
            <label for="name">Email</label>
            <input type="text" id="name" v-model="email">
            </li>
            <li class="form-row">
            <label for="townborn">Password</label>
            <input type="password" id="townborn" v-model="password">
            </li>
            <!-- <li class="form-row">
            <label for="email">Image URL</label>
            <input type="text" id="email" v-model="image">
            </li>
            <li class="form-row">
            <label for="email">Price</label>
            <input type="number" id="price" v-model="price">
            </li> -->
            <li class="form-row">
            <button type="submit" @click.prevent="submitted">Submit</button>
            </li>
        </ul>
    </form> 
</template>

<script>
import {authservice} from '../authservice'
export default {
  data() {
    return {
      email: "",
      password: ""   
    };
  },
  methods: {
    submitted() {

      const formData = {
        email: this.email,
        password: this.password,
        returnSecureToken:true
      };
      console.log(formData);
   
      authservice.getUserSignedIn(formData)
      .then(res=>{
          console.log(res)
          if(res.status == 200){
              alert('User Signed in Successfully');
              this.resetData();
          }      
          })
      .catch(error=>{console.log(error);
      alert('API Error');})
    },
    resetData(){
        this.email ="";
        this.password ="";
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

