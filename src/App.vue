<template>
  <div id="app" class="flex-container">
    <!-- <app-header class="app-row"></app-header>  -->
    <router-view class="app-row" name="HeaderView"></router-view>    
    <router-view></router-view>
    <!-- <Model to display> -->
    <!-- <This is the Model/Dialog class used for> -->
    <div id="shoppingCart" class="modal fade">
     <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Shopping cart</h5>
          <button class="close" data-dismiss="modal">
            &times;
          </button>
        </div>
        <div class="modal-body">
          Total Shopping cart items are {{ productsInCart.length }} with total value of ${{total | dollars}}.
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
          <button class="btn btn-primary">Check out</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import {mapGetters} from 'vuex'
export default {
  name: "app", 
  components: {
    appHeader: Header
  },
  computed:{
    ...mapGetters(['productsInCart']),
    total(){
      var total = 0;
        this.productsInCart.forEach(product => {
            total += parseInt(product.price);
        });
        return total;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.margin-20{
  margin: 20px;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
