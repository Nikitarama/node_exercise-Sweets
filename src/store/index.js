import { createStore } from 'vuex'
import axios from 'axios';
const sweetURL='https://node-eomp.onrender.com/'; //from render.com
export default createStore({
  state: {
    users:null,
    user:null,
    products:null,
    product:null,
    showSpinner:true,
    message:null
  },
  getters: {
  },

  mutations: {
    setUsers(state,values){
      state.users=values
    },
    setProducts(state,values){
      state.products=values
    },
    setMessage(state,message){
      state.message=message
    }
    
  },
  actions: {
    async fetchUsers (context){
      const res= await axios.get (`${sweetURL}users`);
      if (res.data){
        context.commit('setUsers',res.data)
      } else {
        context.commit('setMessage', 'An error occurred')
      }
  },
    async fetchProducts (context){
      const res= await axios.get(`${sweetURL}products`);
      const {result,err}= await res.data;
      if (result){
        context.commit('setProducts',result)
      } else {
        context.commit('setMessage',err)
      }
  },

},
  modules: {
  }
})
