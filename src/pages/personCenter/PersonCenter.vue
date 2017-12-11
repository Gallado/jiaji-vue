
<template>
  <div class="content">
    <div class="person_info" ng-click="goPersonSetting()">
      <div class="personImg">
        <img class="img" src="../../assets/image/personCenter/loginImg.png">
      </div>
      <div class="person_name" @click="goLogin()">
        <p>Gherardo</p>
        <p>使用官网账号登陆</p>
      </div>
    </div>
    <div class="another_info">
      <ul>
        <li @click="goIntegral()">
          <p>203</p>
          <p>积分</p>
        </li>
        <li @click="goCoupon()">
          <p>0</p>
          <p>优惠券</p>
        </li>
      </ul>
    </div>
    <div class="person_list">
      <ul>
        <li class="b-t-n" @click="commonAddress()">
          <div class="itemIcon">
            <i class="icon send"></i>
          </div>
          <div class="item_info">
            <label>发件人地址簿</label>
            <p>您的常用发货地址</p>
          </div>
        </li>
        <li>
          <div class="itemIcon">
            <i class="icon get"></i>
          </div>
          <div class="item_info">
            <label>收件人地址簿</label>
            <p>您的常用收件地址</p>
          </div>
        </li>
        <li>
          <div class="itemIcon">
            <i class="icon draft"></i>
          </div>
          <p>发件草稿箱</p>
        </li>
        <li @click="goMessageCenter()">
          <div class="itemIcon">
            <i class="icon message"></i>
          </div>
          <p>我的消息</p>
        </li>
        <li>
          <div class="itemIcon">
            <i class="icon evaluation"></i>
          </div>
          <p>我的评价</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState,mapGetters } from 'vuex'

  export default {
    data () {
      return {
        message:'hello world'
      }
    },
    mounted(){
      this.getUserInfo();
    },
    computed:{
      ...mapGetters({
        loginInfo:"completedUserInfo",
      })
    },

    methods:{
      getUserInfo(){
        console.log(this.loginInfo);

      },
      goLogin(){
        this.$router.push({path:'/login'});
      },
      goMessageCenter(){
        this.$router.push({path:'/messageCenter'});
      },
      goIntegral(){
        this.$router.push({path:'/integral'})
      },
      goCoupon(){
        this.$router.push({path:'/coupon'});
      },
      commonAddress(){
        this.$router.push({path:'/sendAddress'});
      }

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
  .personCenter_content{

  }
  .person_info{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 50px 30px;
    color: #fff;
    position: relative;
    background-color: #D61E14
  }
  .person_info:after{
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -8px;
    background-image: url(../../assets/image/personCenter/personArrow.png);
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: contain;
    background-size: contain;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    right: 15px;
  }
  .person_info .personImg{
    width: 80px;
    height: 80px;
  }
  .person_info .personImg img{
    border-radius: 80px;
  }
  .person_info .person_name{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px;
  }
  .person_info .person_name p{
    padding: 5px 0;
  }
  .person_info .person_name p:first-child{
    font-size: 16px;
  }
  .person_list{
    background-color: #fff;
    margin-top: 10px;
  }

  .person_list ul li{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;
    border-bottom: 1px solid #d5d5d5;
    padding: 0 15px;
    position: relative;
  }
  .person_list ul li:first-child{
    border-top: 1px solid #d5d5d5;
  }

  .person_list ul li:after{
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -8px;
    background-image: url(../../assets/image/personCenter/rightArrow.png);
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: contain;
    background-size: contain;
    vertical-align: middle;
    width: 16px;
    height: 16px;
    right: 15px;

  }
  .person_list ul li .itemIcon{
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .person_list ul li .item_info{
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding-right: 20px;
  }
  .person_list ul li .item_info p{
    color: #666;
  }

  .another_info{
    height: 45px;
    background-color: #B91007;
  }
  .another_info ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;

  }
  .another_info ul li{
    height: 100%;
    flex: 0.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: relative;
  }
  .another_info ul li:first-child:after{
    position: absolute;
    content: '';
    height: 30px;
    width: 1px;
    right: 0;
    top: 50%;
    margin-top: -17px;
    background-color: #fff;

  }
  .another_info ul li p{

  }

  .send{
    background-image:url(../../assets/image/personCenter/send.png);
    width: 20px;
    height: 20px;
  }
  .get{
    background-image:url(../../assets/image/personCenter/receive.png);
    width: 20px;
    height: 20px;
  }
  .draft{
    background-image:url(../../assets/image/personCenter/draftBox.png);
    width: 20px;
    height: 20px;
  }
  .evaluation{
    background-image:url(../../assets/image/personCenter/evaluation.png);
    width: 20px;
    height: 20px;
  }
  .message{
    background-image:url(../../assets/image/personCenter/myMessage.png);
    width: 20px;
    height: 20px;
  }


</style>

