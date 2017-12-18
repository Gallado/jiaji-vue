
<!-- Home.vue -->
<template>
  <div class="content">
    <div class="coupon_tab">
      <ul>
        <router-link :to="{name:'Used'}" tag="li" replace>
          <p>未使用</p>
        </router-link>
        <router-link :to="{name:'NoUse'}" tag="li" replace>
          <p>已使用</p>
        </router-link>
        <router-link :to="{name:'Expired'}" tag="li" replace>
          <p>已过期</p>
        </router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    data () {
      return {
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
    },
    // 在components字段中，包含导入的子组件
    components: {

    }
  }
</script>

<style scoped>
  .content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .coupon_tab{
    height: 45px;
    background-color: #fff;

  }
  .coupon_tab ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
  }
  .coupon_tab ul li{
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 0.3333;
    border-bottom: 1px solid #d5d5d5;

  }
  .coupon_tab ul li p{
    border-bottom: 2px solid transparent;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

  }
  .coupon_tab ul .router-link-active{
    color:red;
    border-bottom: 2px solid red;
  }





</style>

