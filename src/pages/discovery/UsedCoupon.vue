
<!-- Home.vue -->
<template>




      <p>111111</p>

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

<style>
  .content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .coupon_content{

  }




</style>

