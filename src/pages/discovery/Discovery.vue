
<!-- Home.vue -->
<template>

  <div class="content">

    <div class="check_in">
      <div class="checkInImg">
        <img class="img" src="../../assets/image/personCenter/loginImg.png">
      </div>
      <div class="checkIn_info">
        <div>今日签到</div>
        <p>签到送积分</p>
      </div>
    </div>
    <div class="delivery_list">
      <ul>
        <li @click="goIntegral()">
          <div class="itemIcon">
            <i class="icon integral"></i>
          </div>
          <div class="item_info">
            <p>积分</p>
            <p>203</p>
          </div>
        </li>
        <li @click="goCoupon()">
          <div class="itemIcon">
            <i class="icon coupon"></i>
          </div>
          <div class="item_info">
            <p>优惠券</p>
            <p>0张</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!--<Footer></Footer>-->
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
      goCoupon(){
        this.$router.push({path:'/coupon'});
      },
      goIntegral(){
        this.$router.push({path:'/integral'});
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
  .check_in{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding:30px;
    border-bottom: 1px solid #d5d5d5;
    position: relative;
    background-color: #fff;
  }
  .checkInImg{
    width: 80px;
    height: 80px;
    border-radius: 80px;
  }
  .checkInImg img{
    border-radius: 80px;
  }
  .checkIn_info{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px;
  }
  .checkIn_info div{
    padding: 5px 0;
  }
  .checkIn_info p{

  }

  .delivery_list{
    margin-top: 10px;

  }
  .delivery_list ul li{
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    padding: 0 15px;
    position: relative;
    border-bottom: 1px solid #d5d5d5;
  }
  .delivery_list ul li:first-child{
    border-top: 1px solid #d5d5d5;
  }
  .delivery_list ul li:after{
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
  .delivery_list ul li .itemIcon{
    width: 45px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .delivery_list ul li .item_info{
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding-right: 15px;
  }
  .delivery_list ul li .item_info p:last-child{
    color: #666;
  }
  .coupon{
    background-image: url(../../assets/image/discovery/coupon.png);
    width: 20px;
    height: 20px;
  }
  .integral{
    background-image: url(../../assets/image/discovery/integral.png);
    width: 20px;
    height: 20px;
  }



</style>

