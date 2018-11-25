import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state ={
  count: 1
}


const mutations = {

  add(state,n){
    state.count+= n
  },
  reduce(state){
    state.count--
  }

}


const getters = {
  
  counts:function(state){
    return state.count+=100
  }
}

const actions = {

   addAction(context){//constext相当于上下文对象store
    context.commit('add',10);
    setTimeout(()=>{
      context.commit('reduce')
      console.log('我比reduce先执行了')
    },5000)
   },
   reduceAction({commit}){//这里是直接使用包装的commit对象
       commit('reduce')
   }

}



export default new Vuex.Store({
     state,
     mutations,
     getters,
     actions
})