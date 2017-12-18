
<!-- Home.vue -->
<template>
  <div class="content">
    <div class="integral_list">
      <ul>
        <li v-for="item in goIntegralListData">
          <div class="item_status">
            <p>{{item.date}}</p>
            <i class="icon" v-bind:class="{'nowStatus':item.date == '当前','status':item.date != '当前'}"></i>
          </div>
          <div class="item_info" v-if="item.date == '当前'">
            <div class="integral_info">
              <div class="tips">
                <i class="icon tipIcon"></i>
                <p>如何获取更多积分</p>
              </div>
              <p>共<span>{{item.integral}}</span>积分</p>
            </div>
          </div>
          <div class="item_info" v-if="item.date != '当前'">
            <div class="integral_info">
              <p>签到积分，<span>获得{{item.integral}}</span>积分</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        goIntegralListData:[]
      }
    },
    mounted(){
      //初始化title
      this.initData();
    },
    methods:{
      initData () {
        this.goIntegralListData =[{
          "date":"当前",
          "integral":"203"
        },{
          "date":"08.09",
          "integral":"2"
        },{
          "date":"12.11",
          "integral":"1"
        },{
          "date":"03.34",
          "integral":"2"
        },{
          "date":"05.01",
          "integral":"1"
        }]
      },
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
  .integral_list{
    padding: 0 15px;

  }
  .integral_list ul li{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 70px;


  }
  .integral_list ul li .item_status{
    width: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    position: relative;
    height: 100%;

  }
  .integral_list ul li .item_status:before{
    position: absolute;
    content: '';
    width: 1px;
    right: 17px;
    height: 27px;
    background-color: #313131;
    top: 50%;
    margin-top: -35px;
  }
  .integral_list ul li .item_status:after{
    position: absolute;
    content: '';
    width: 1px;
    right: 17px;
    height: 27px;
    background-color: #313131;
    top: 50%;
    margin-top: 8px;
  }
  .integral_list ul li .item_status p{
    padding-right: 10px;
  }
  .item_info{
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;
    padding-left: 20px;

  }
  .integral_list ul li:first-child .item_status:before{
    display: none;
  }
  .integral_list ul li:first-child .item_status:after{
    height: 32px;
  }
  .integral_list ul li:last-child .item_status:after{
    display: none;
  }
  .integral_list ul li:first-child{
    height: 80px;
  }
  .integral_list ul li:first-child .item_info{
    height: 60px;
  }
  .integral_list ul li:first-child .item_info .integral_info{
    background-color: #d61e14;
    color: #fff;
    display: flex;
    flex-direction: column;

  }
  .integral_list ul li:first-child .item_info .integral_info:before{
    border: 8px solid transparent;
    border-right:8px solid #d61e14;
    left: -16px;
    margin-top: -8px;
  }
  .integral_list ul li:first-child .item_info .integral_info span{
    color: #fff;
    font-weight: bold;
    font-size: 28px;
  }
  .integral_list ul li:first-child .item_info .integral_info >p{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: baseline;
    padding-top: 5px;
  }
  .integral_info{
    padding: 0 15px;
    border-radius: 4px;
    position: relative;
    background-color: #fff;
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .integral_info:before{
    position: absolute;
    content: '';
    border: 6px solid transparent;
    border-right: 6px solid #fff;
    left: -12px;
    top: 50%;
    margin-top: -6px;
  }
  .tips{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    font-size: 12px;
    text-decoration: underline;
    padding: 5px 0;
  }
  .tips p{
    padding: 0 5px;
  }
  .item_info span{
    color: #d61e14;
  }
  .nowStatus{
    background-image: url("../../assets/image/discovery/now_status.png");
    width: 16px;
    height: 16px;
  }
  .status{
    background-image: url("../../assets/image/discovery/status.png");
    width: 16px;
    height: 16px;
  }
  .tipIcon{
    background-image: url("../../assets/image/discovery/tipsIcon.png");
    width: 12px;
    height: 12px;
  }


</style>

