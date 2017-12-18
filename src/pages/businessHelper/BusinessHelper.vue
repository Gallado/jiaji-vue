
<!-- Home.vue -->
<template>

    <div class="content">
      <div class="businessHelper_menu">
        <ul>
          <li>
            <i class="icon sendGoods"></i>
            <p>价格时效</p>
          </li>
          <li>
            <i class="icon websiteQuery"></i>
            <p>运输要求</p>
          </li>
          <li>
            <i class="icon deliveryRecord"></i>
            <p>产品介绍</p>
          </li>
          <li>
            <i class="icon receiptRecord"></i>
            <p>增值服务</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  // 导入要用到的子组件
  import Header from '../../components/Header'

  export default {
    data () {
    return {
    }
  },
  mounted(){
    this.getParmas();
  },
  methods:{
    getParmas(){
      this.$route.query;
      console.log(this.$route.query);
    }
  },
  // 在components字段中，包含导入的子组件
  components: {
      Header
  }
  }
</script>

<style scoped>

  .content{
    width: 100%;
    height: 100%;
  }
  .businessHelper_menu ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    flex-flow: row wrap;
  }
  .businessHelper_menu ul li{
    flex: 0.5;
    min-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #d5d5d5;
  }
  .businessHelper_menu ul li:nth-child(2n+1){

    border-right: 1px solid #d5d5d5;
  }
  .businessHelper_menu ul li p{
    padding: 5px 0;
  }
  .sendGoods{
    background-image:url(../../assets/image/home/sendGoods.png);
    width: 60px;
    height: 60px;
  }
  .websiteQuery{
    background-image:url(../../assets/image/home/websiteQuery.png);
    width: 60px;
    height: 60px;
  }
  .deliveryRecord{
    background-image:url(../../assets/image/home/deliveryRecord.png);
    width: 60px;
    height: 60px;
  }
  .receiptRecord{
    background-image:url(../../assets/image/home/receiptRecord.png);
    width: 60px;
    height: 60px;
  }
</style>

