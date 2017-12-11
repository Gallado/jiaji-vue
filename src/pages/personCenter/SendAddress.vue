
<!-- Home.vue -->
<template>
  <div class="content">
    <div class="address_list">
      <ul>
        <li v-for="data in commonAddressData">
          <div class="main_info" @click="selectItem(data)">
            <div class="item_info">
              <i class="icon user"></i>
              <p>{{data.name}}</p>
            </div>
            <div class="item_info">
              <i class="icon phone"></i>
              <p>{{data.phoneNo}}</p>
            </div>
            <div class="item_info">
              <i class="icon address"></i>
              <p class="f_c">{{data.address}}</p>
            </div>
            <div class="item_info">
              <i class="icon detailAddress"></i>
              <p class="f_c">{{data.detailAddress}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer-bar" >
      <div class="new_address_btn" @click="addNewAddress()">
        <i class="icon add"></i>
        <p>添加新地址</p>
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
        commonAddressData:[],
      }
    },
    mounted(){
      this.getCommonAddress();

    },
    methods:{
      getCommonAddress(){
        this.commonAddressData = [{
          "name":"Gherardo",
          "phoneNo":"18392021656",
          "address":"陕西省-西安市-雁塔区",
          "detailAddress":'锦业路'
        },{
          "name":"Wing",
          "phoneNo":"18392021656",
          "address":"陕西省-西安市-雁塔区",
          "detailAddress":'电子六路'
        },{
          "name":"Wing",
          "phoneNo":"18392021656",
          "address":"陕西省-西安市-雁塔区",
          "detailAddress":'电子六路'
        },{
          "name":"Wing",
          "phoneNo":"18392021656",
          "address":"陕西省-西安市-雁塔区",
          "detailAddress":'电子六路'
        },{
          "name":"Wing",
          "phoneNo":"18392021656",
          "address":"陕西省-西安市-雁塔区",
          "detailAddress":'电子六路'
        }];

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
  .address_list{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 44px;
    overflow-y: auto;

  }
  .address_list ul li{
    background-color: #fff;
    margin-bottom: 10px;
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
    position: relative;
  }
  .address_list ul li:last-child{
    margin-bottom:0;
    border-bottom: none;
  }
  .address_list ul li:after{
    position: absolute;
    content: '';
    right: 20px;
    top: 50%;
    margin-top: -8px;
    background-image: url(../../assets/image/personCenter/rightArrow.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;

  }
  .address_list ul li .main_info{
    padding: 10px 15px;
  }
  .address_list ul li .main_info .item_info{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 5px 0;
  }
  .address_list ul li .main_info .item_info p{
    padding: 0 10px;
    flex: 1;
  }
  .f_c{
    color: #666;
  }



  .add_new_address{
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .add_new_address .add_btn{
    width: 80%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #D61E14;
    color: #fff;
  }
  .add_new_address .add_btn p{
    padding: 0 10px;
  }
  .add{
    background-image:url(../../assets/image/personCenter/add.png);
    margin: 0 5px;
  }
  .user{
    background-image:url(../../assets/image/personCenter/user.png);
    width: 20px;
    height: 20px;
  }
  .phone{
    background-image:url(../../assets/image/personCenter/phone.png);
    width: 18px;
    height: 18px;
  }
  .address{
    background-image:url(../../assets/image/personCenter/address.png);
    width: 18px;
    height: 18px;
  }
  .detailAddress{
    background-image:url(../../assets/image/personCenter/detailAddress.png);
    width: 18px;
    height: 18px;
  }
  .footer-bar{
    height: 44px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5px;
    border-top:1px solid #e5e5e5;
  }
  .new_address_btn{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    background-color: #d61e14;
    border-radius: 6px;
    height: 100%;
    color: #fff;

  }



</style>

