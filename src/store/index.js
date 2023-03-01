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
    }
    
  },
  actions: {
    async fetchUsers (context){
      const res= await axios.get (`${sweetURL}users`);
      const {results,err}= await res.data;
      if (results){
        context.commit('setUsers',results)
      } else {
        context.commit('setMessage',err)
      }
  },
    async fetchProducts (context){
      const res= await axios.get (`${sweetURL}products`);
      const {results,err}= await res.data;
      if (results){
        context.commit('setProducts',results)
      } else {
        context.commit('setMessage',err)
      }
  },

},
  modules: {
  }
})
