import Vue from  'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state ={
  count:2
}

const mutations = {
  add(state,n){
    state.count+=n
  },
  reduce(state,n){
    state.count-=n
  }
}

const actions = {
   addAction(context,n){
     context.commit('add',n)
   },
   reduceAction({commit}){
     commit('reduce',2)
   }
}

const getters ={
  count:state =>state.count
}


export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})