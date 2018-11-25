<template>
 <div>
   {{msg}}
  <div>
   {{count}}    
  </div>
  <div>
    <button @click="add(10)">+</button>
    <button @click="reduce(1)">-</button>
  </div>
  <div>
    <button @click="addAction(5)">+</button>
    <button @click="reduceAction(2)">-</button>
  </div>
 </div>
</template>
<script>
  import store from '@/vuex/store'
  import {mapState,mapMutations,mapGetters, mapActions} from 'vuex'
  export default {
    data(){
      return {
        msg:'hello smdq'
      }
    },
    computed:{
     //...mapState(['count']),
     ...mapGetters(['count'])
    },
    methods:{
     ...mapMutations(['add','reduce']),
     ...mapActions(['addAction','reduceAction'])
    },
    store
  }
</script>
