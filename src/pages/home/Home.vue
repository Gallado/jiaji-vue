
<!-- Home.vue -->
<template>
    <div class="content">
      <swiper :swiperData="swiperImg" @listenToChild="showChildData"></swiper>
      <div class="home_menu">
        <ul>
          <li>
              <i class="icon sendGoods"></i>
              <p>我要发货</p>
          </li>
          <li>
              <i class="icon orderQuery"></i>
              <p>运单查询</p>
          </li>
          <li>
              <i class="icon deliveryRecord"></i>
              <p>发货记录</p>
          </li>
          <li>
              <i class="icon receiptRecord"></i>
              <p>收货记录</p>
          </li>
          <li @click="goWebsiteQuery()">
              <i class="icon websiteQuery"></i>
              <p>网点查询</p>
          </li>
          <li @click="goBusinessHelper()">
              <i class="icon businessAide"></i>
              <p>业务助手</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  // 导入要用到的子组件
  import { mapGetters } from 'vuex'
  import Swiper from '../../components/Swiper'

  export default {
    data () {
      return {
        swiperImg:'',
      }
  },

  mounted(){
    //初始化获取swiper的值
    this.getSwiperData();
  },
  computed:{
    ...mapGetters({
      loginInfo:"completedUserInfo",
    })
  },
  methods:{
    getSwiperData () {
      this.swiperImg = {'name':'duweiwie','age':20};
      console.log(this.loginInfo);
    },
    goBusinessHelper(){
      this.$router.push({path:'/businessHelper',query:{userName: 'duweiwei',age:20}});
    },
    showChildData(data){
      console.log(data);
    },
    goWebsiteQuery(){
      this.$router.push({path:'/websiteQuery'});
    }
  },
  // 在components字段中，包含导入的子组件
    components: {
      Swiper
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
  .home_menu{
    background-color: #fff;
    flex: 1;
  }
  .home_menu ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-flow: row wrap;
    height: 100%;
  }
  .home_menu ul li{
    flex: 0.5;
    height: 33.3333%;
    min-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #d5d5d5;
  }
  .home_menu ul li:nth-child(2n-1){
    border-right: 1px solid #d5d5d5;
  }
  .home_menu ul li p{
    padding: 5px 0;
  }

  .sendGoods{
    background-image:url(../../assets/image/home/sendGoods.png);
    width: 50px;
    height: 50px;
  }
  .websiteQuery{
    background-image:url(../../assets/image/home/websiteQuery.png);
    width: 50px;
    height: 50px;
  }
  .deliveryRecord{
    background-image:url(../../assets/image/home/deliveryRecord.png);
    width: 50px;
    height: 50px;
  }
  .receiptRecord{
    background-image:url(../../assets/image/home/receiptRecord.png);
    width: 50px;
    height: 50px;
  }
  .orderQuery{
    background-image:url(../../assets/image/home/orderQuery.png);
    width: 50px;
    height: 50px;
  }
  .businessAide{
    background-image:url(../../assets/image/home/businessAide.png);
    width: 50px;
    height: 50px;
  }

</style>

