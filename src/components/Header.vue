<template>
<!-- <div> -->
<nav class="shop-header header-nowrap header-primary">
  <ul class="nav-list">
    <router-link  tag="li" to="/products" active-class="active" exact>
      <a class="nav-link">Products</a>
    </router-link>
    <router-link tag="li" to="/cart" active-class="active" exact>
      <a class="nav-link">Mycart({{productsInCart.length}})</a>
    </router-link> 
    <router-link tag="li" to="/addproduct" active-class="active" exact>
      <a class="nav-link">Add Product</a>
    </router-link>  
  </ul>
  <form class="right-component margin-top-5 ml-auto" >
      <input class="form-control mr-sm-2" v-if="showSearch" type="search" placeholder="Search Product" 
      @keyup="filterProductList">
      <button 
              class="btn btn-outline-success margin-top-5 my-sm-0"  
              v-if="!showSearch" 
              type="submit" 
              data-toggle="modal" 
              data-target="#shoppingCart">Check out</button>
      <button 
              class="btn btn-outline-success margin-top-5 my-sm-0"  
              @click.prevent="logout"
              >Logout</button>
  </form>
</nav>
<!-- </div> -->
</template>

<script>
import { mapGetters } from "vuex";

// function Person(params) {
    
// }
export default {
  props:[
    // 'author': Person
  ],
  data() {
    return {
      showSearch: false   
    };
  },
  computed: {
    ...mapGetters(["productsInCart"])
  },
  methods: {
    filterProductList(event) {
      //console.log("key press enter value is :");
      //console.log(event.target.value);
      this.$store.dispatch("filterProductList", event.target.value);
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("\login");
    }
  },
  created() {
    //console.log("Header Component Gets Created ::");
    if (this.$route.fullPath == "/products") {
      this.showSearch = true;
    }
  },
  
  watch: {
    $route() {
      //console.log(this.$route);
      if (this.$route.fullPath == "/products") {
        this.showSearch = true;
      } else if (this.$route.fullPath == "/cart") {
        this.showSearch = false;
      } else {
        this.showSearch = false;
      }
    }
  }
};
</script>
<style scoped>
.shop-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem;
}
.shop-header.header-nowrap{
  flex-wrap: nowrap;  
}
.shop-header.header-primary{
  background-color: #007bff!important;
}
.shop-header .nav-list{
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
.shop-header .nav-link{
    display: block;
    padding: .5rem 1rem;
}
.shop-header .right-component{
    display: flex; 
    flex-flow: row nowrap;
    align-items: center;
}

.form-control{
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.active {
  background-color: green;
}
</style>

