<template>
  <div>      
    <div class="app-row margin-20" >
   
      <app-product v-for="(item,index) in filteredProducts" :key="index"
      :prodId ="item.prodId"
      :image="item.image"
      :name="item.name"
      :price="item.price"
      @click.native="redirectToDetails(item)"
      ></app-product>        
    </div>
    <span v-for="(addedP,index) in productsInCart" :key="index">{{addedP}}</span>    
  </div>
</template>

<script>
import Product from "./Product.vue";
import { mapGetters } from "vuex";
import { service } from "../dataservice"
export default {
  name: "app",
  components: {
    appProduct: Product
  },
  computed: {
    ...mapGetters(["productsInCart", "productsForSale", "filteredProducts"])
  },
  methods: {
    redirectToDetails(item) {
      console.log("Redirecting from here");
      console.log(item);
      //This Will not work
      //this.$router.push({path:'/products',params:{id:item.prodId}});
      //following name will work
      this.$router.push({
        name: "product-detail",
        params: {
          id: item.prodId,
          name: item.name,
          description: item.description
        }
      });
    }
  },
  beforeCreate(){
    console.log('PList-beforeCreate');
    service.getAllProducts().then(res =>{
    var productArray =[];
    for(var keys in res.data){
      var product = res.data[keys];
      product.prodId = keys;
      console.log(product);
      productArray.push(product);
    }
    this.$store.dispatch('loadProducts',productArray);
    this.$store.dispatch("filterProductList", "");
    }).catch()
  },
  created(){
    console.log('PList-Created');
  },
  beforeMount(){
    console.log('PList-beforeMount');
  },
  mounted(){
    console.log('PList-mounted');
  },
  beforeUpdate(){
    console.log('PList-beforeUpdate');
  },
  updated(){
    console.log('PList-updated');
  },
  beforeDestroy(){
    console.log('PList-beforeDestroy');
  },
  destroyed(){
    console.log('PList-destroyed');
  },
  beforeRouteEnter (to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    console.log('PList-beforeRouteEnter');
    next();
  },
  beforeRouteUpdate (to, from, next) {
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused, and this hook will be called when that happens.
    // has access to `this` component instance.
    console.log('PList-beforeRouteUpdate');
    next();
  },
  beforeRouteLeave (to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
    console.log('PList-beforeRouteLeave');
    next();
  }
};
</script>
