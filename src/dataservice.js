import axios from 'axios'
import {store} from './store/store'

const axiosCustomInstance = axios.create({
    baseURL:'https://testdb-c96de.firebaseio.com'
});
//global configurations
axiosCustomInstance.defaults.baseURL ='https://testdb-c96de.firebaseio.com';
axiosCustomInstance.defaults.headers.get['Accepts']='application/json';

var PRODUCT_URL ="/Products.json"; 

//interceptors for request and response
const requstInterceptor = axiosCustomInstance.interceptors.request.use(config=>{
    //modify object here
    config.headers.common['Authorization']='test';
    config.headers['ABC']= 'PQR';
    console.log('In Request interceptos :');
    console.log(config);
    console.log('STORE  :::');
    console.log(store);
    return config;
});

const responseInterceptor = axiosCustomInstance.interceptors.response.use(response=>{
    console.log('In Response interceptor :');
    console.log(response);
    return response;
});
//FOR REMOVING interceptors use following
//axios.interceptors.request.eject(requstInterceptor);
//axiosCustomInstance.interceptors.response.eject(responseInterceptor);
export const service = {
  postProduct(productData){
      return axiosCustomInstance.post(PRODUCT_URL,productData+ '?auth='+store.state.idToken);
  },
  getAllProducts(){ 
    return axiosCustomInstance.get(PRODUCT_URL + '?auth='+store.state.idToken);
} 
}
