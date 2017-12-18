
<!-- Home.vue -->
<template>
  <div class="coupon_content">
      <p>222222</p>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        couponTabIndex:0
      }
    },
    mounted(){
      //初始化title
      //this.setTitle();
    },
    methods:{
      /*setTitle () {
        this.$store.dispatch('setTitle', '安全签报');
      },*/
      couponTab(index){
        this.couponTabIndex = index;

      }
    },
    // 在components字段中，包含导入的子组件
    components: {

    }
  }
</script>

<style scoped>
  .coupon_content{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }




</style>

