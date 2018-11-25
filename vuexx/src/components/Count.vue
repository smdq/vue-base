<template>
  <div>
    <h2>{{msg}}</h2><hr/>
    <h3>{{$store.state.count}}--{{counts}}</h3>
    <p>
      <!-- <button @click="$store.commit('add',10)">+</button>
      <button @click="$store.commit('reduce')">-</button> -->
      <button @click="add(10)">+</button>
      <button @click="reduce()">-</button>
    </p>
    <p>
      <button @click="addAction(10)" >+</button>
      <button @click="reduceAction()">-</button>
    </p>
  </div>
</template>
<script>
import store from '@/vuex/store';
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
  export default {
          data(){
            return {
              msg:'hello vuex'
            }
          },
          // computed:{
          //  count(){
          //    return this.$store.state.count
          //  }
          // },
          // computed:mapState({
          //   count: state =>state.count

          // }),
          // computed:mapState(['count'])
          computed:{
  
           //...mapState(['count']),
           ...mapGetters(['counts'])
          },
          methods:{
            ...mapMutations(['add','reduce']),
            ...mapActions(['addAction','reduceAction'])
          },
          store
  }
</script>
