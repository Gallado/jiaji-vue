
<!-- Home.vue -->
<template>
  <div class="content">

    <div class="message_detail">
        <div class="detail_Img">
          <img class="img" src="../../assets/image/personCenter/loginImg.png">
        </div>
      <div class="detail_info">
        <div class="info_item">
          <label>消息名称：</label>
          <p>{{messageDetailInfo.name}}</p>
        </div>
        <div class="info_item">
          <label>消息标题：</label>
          <p>{{messageDetailInfo.subTitle}}</p>
        </div>
        <div class="info_item">
          <label>创建时间：</label>
          <p>{{messageDetailInfo.time}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  // 导入要用到的子组件
  import Header from '../../components/Header'

  export default {
    data () {
      return {
        messageDetailParmas:{},
        messageDetailInfo:{}
      }
    },
    mounted(){
      this.getMessageDetail();

    },
    methods:{
      getMessageDetail(){
        this.messageDetailParmas = this.$route.query;
        //根据传递过来的参数查询详细的信息
        console.log(this.messageDetailParmas);
        this.messageDetailInfo = {"name":this.$route.query.name,"subTitle":this.$route.query.subTitle,"time":"2017-12-1"};
        console.log(this.messageDetailInfo);

      },
      goMessagedetail(index,data){
        console.log(data);
        this.$router.push({path:'/businessHelper',data:{}});

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
  .message_detail{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding:10px;
  }
  .detail_Img{
    width: 60px;
    height: 60px;
  }
  .detail_Img img{
    border-right:60px;
  }
  .detail_info{
    padding: 0 10px;
    flex:1;
    display: flex;
    flex-direction: column;

  }
  .info_item{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .info_item label{

  }
  .info_item p{

  }


</style>

