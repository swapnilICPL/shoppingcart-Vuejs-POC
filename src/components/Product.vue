<template>
       <div class="app-card">
        <img :src="image" :alt="name" class="card-img-top">
        <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
        <div class="card-text">${{ price | dollars }}</div>
        <div class="row justify-content-center">
       <button class="btn btn-primary" @click.stop="addToCart({prodId:prodId,name:name,price:price})">Add to cart</button>
      </div>
      </div>
    </div>      
</template>
<script>
export default {
     props:['prodId','image','name','price'],
    //  filters: {
    //     dollars: num => `${num / 100}`,
    // },
    methods:{
        addToCart(product){
            this.$store.dispatch('push', product);
        }
    }

}
</script>
<style>
.card-img-top{
    height: 50%;
    width: 95%;
}
</style>


