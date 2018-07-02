import Cart from "./components/Cart.vue";
import ProductContainer from "./components/ProductContainer.vue";
import ProductList from "./components/ProductList.vue";
import ProductDetail from "./components/ProductDetail.vue";
import AddProduct from "./components/AddProduct.vue"
import Login from "./components/Login.vue"
import Signup from "./components/SignUp.vue"
import Header from "./components/Header.vue"
import {store} from './store/store'

export const routes = [
    {
        path: '/products',
        components: {
            default: ProductContainer,
            HeaderView: Header
        },
        beforeEnter(to,from,next){
            if(store.state.idToken) {
                next();
            }else {
                next('/login');
            }
        },
        // component: ProductContainer,
        children: [
            // UserHome will be rendered inside User's <router-view>
            // when /user/:id is matched
            { path: '', component: ProductList },
            { path: ':id',  component: ProductDetail, name:'product-detail' }
    
            // ...other sub routes
          ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/cart',
        components: {
            default: Cart,
            HeaderView: Header
        }, 
        beforeEnter(to,from,next){
            if(store.state.idToken) {
                next();
            }else {
                next('/login');
            }
        }
    },
    {
        path:'/addproduct',
        components: {
            default: AddProduct,
            HeaderView: Header
        },
        //Auth guard for guarding related
        beforeEnter(to,from,next){
            if(store.state.idToken) {
                next();
            }else {
                next('/login');
            }
        }
    },
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '*',
        redirect: '/login'
    }
];