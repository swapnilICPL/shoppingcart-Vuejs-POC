<template>
 <div>    
<table class="table" v-if="total>0">
  <tbody>
    <tr v-for="(item,index) in productsInCart" :key="index">
      <td>{{ item.name }}</td>
      <td>{{ item.price | dollars }}</td>
      <td>
          <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">X</button>     
      </td>
    </tr>
    <tr>
      <th></th>
      <th>{{ total | dollars }}</th>
      <th></th>
    </tr>   
  </tbody>
</table>
<span v-else>You dont have any item in cart yet.Keep Shopping.</span>
 </div>   
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["productsInCart"]),
    total(){
        var total = 0;
        this.productsInCart.forEach(product => {
            total += parseInt(product.price);
        });
        return total;
    },
  },
  methods:{
      removeFromCart:function(index){
          this.$store.dispatch('popProductFromCart',index);
      }
  }
  
};
</script>

