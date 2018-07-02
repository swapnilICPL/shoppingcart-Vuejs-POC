import axios from 'axios'

const axiosCustomInstance_auth = axios.create({
    baseURL:'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
});
//global configurations
axiosCustomInstance_auth.defaults.headers.get['Accepts']='application/json';
const API_KEY = 'AIzaSyCWHqcOqmQ1vsaxUb_we9cTcMYdcbEfZNM';
const SIGNUP_URL ="/signupNewUser?key=" + API_KEY; 
const LOGIN_URL = "/verifyPassword?key="+ API_KEY; 

export const authservice = {
  getUserSignedIn(formData){
      return axiosCustomInstance_auth.post(SIGNUP_URL,formData);
  },
  loginUser(formData){
        return axiosCustomInstance_auth.post(LOGIN_URL,formData);
  }
}
