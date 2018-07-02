import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        productsforSale: [
            // { prodId: 1, name: 'Cake', image: 'https://source.unsplash.com/oudLkxglHuM', price: 999 },
            // { prodId: 2, name: 'Chocolate', image: 'https://source.unsplash.com/6regCWGgEsc', price: 1499 },
            // { prodId: 3, name: 'Maggi', image: 'https://source.unsplash.com/2miSJ1zka1M', price: 499 },
            // { prodId: 4, name: 'SoftDrink', image: 'https://source.unsplash.com/sQNq223Rr54', price: 299 },
            //https://source.unsplash.com/RwjciZ9JEfg
        ],
        productsInCart: [],
        filteredProducts :[],
        idToken:null,
        loggedUser:null
    },
    getters: {
        productsForSale: state => state.productsforSale,
        productsInCart: state => state.productsInCart,
        filteredProducts: state => state.filteredProducts,
        token: state => state.idToken,
        loggedUser: state=> state.loggedUser
    },
    mutations: {
        loadProducts: (state, payload) => {
            state.productsforSale = payload;
        },
        pushToProductCart: (state, productID) => {
            state.productsInCart.push(productID);
        },
        popFromProductCart: (state, index) => {
            state.productsInCart.splice(index,1);
        },
        filterProductList: (state, productName) => {
            state.filteredProducts = state.productsforSale.filter((product) => {
                return product.name.match(productName);
            });         
        },
        authUser :(state,userInfo) =>{
            state.idToken = userInfo.token;
            state.loggedUser = userInfo.user;
        },
        clearAuth :state =>{
            state.idToken = null;
            state.loggedUser = null;
        }
    },
    actions: {
        push: (context, payload) => {
            context.commit('pushToProductCart', payload);
        },
        filterProductList: (context, payload) => {
            context.commit('filterProductList', payload);
        },
        popProductFromCart:(context,payload)=>{
            context.commit('popFromProductCart', payload);
        },
        loadProducts: (context, payload) => {
            context.commit('loadProducts', payload);
        },
        authUser: (context, payload) => {
            context.commit('authUser', payload);
        },
        logout: (context) => {
            context.commit('clearAuth');
        }
    }

}); 