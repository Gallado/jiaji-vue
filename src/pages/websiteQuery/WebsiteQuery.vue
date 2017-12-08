
<!-- Home.vue -->
<template>
  <div class="content">
    <div class="search_title">
      <div class="website_search">
        <div class="search_bar">
          <input type="text" v-model="keyWords" placeholder="请输入营业部名称、电话或地址">
          <i v-show="keyWords" class="icon clearIcon" @click="clearKeyWords()"></i>
        </div>
        <div class="searchIcon" @click="searchItem(keyWords)">
          <i class="icon search"></i>
        </div>
      </div>
    </div>

    <div class="website_list">
      <ul>
        <li v-for="data in vm.messages">
          <div class="website_info">
            <div class="website_title">
              <h3>{{data.name}}</h3>
              <div class="website_distance">
                <i class="icon position"></i>
                <p>{{data.distance}}</p>
              </div>
            </div>
            <div class="website_item">
              <i class="icon address"></i>
              <p>{{data.address}}</p>
            </div>
            <div class="website_item">
              <i class="icon tag"></i>
              <p>{{data.tag}}</p>
            </div>
            <div class="website_item">
              <i class="icon telephone"></i>
              <p>{{data.telephone}}</p>
            </div>
          </div>
          <div class="website_operate">
            <div class="operate_item" ng-click="toTelphone($event,'18392021656')">
              <i class="icon toOrder"></i>
              <p>立即下单</p>
            </div>
            <div class="operate_item" @click="goWebsiteMap(data)">
              <i class="icon goHere"></i>
              <p>到这里去</p>
            </div>
          </div>
        </li>
        <div v-if="showPullMore" class="pull-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
          <i class="icon loading"></i>
          <p>努力加载中...</p>
        </div>
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
        websiteList:[],
        websiteNewList:[],
        keyWords:'',
        showPullMore:true,
        vm:{
          messages: [],
          pagination: {
            perPage: 7,
            currentPage: 1
          },
          init:function () {}
        }
      }
    },
    mounted(){
      this.getInitData();

    },

    methods:{
      getInitData(){
        console.log("获取初始化数据");
        console.log(111);
        this.websiteList = [{
          "name":"西安市雁塔区锦业路营业部",
          "address":"西安市高新区锦业路与丈八三路十字西南角绿地世纪城俱乐部1楼",
          "telephone":"029-98564821/1/2/3",
          "tag":"发货  提货",
          "distance":"1.82米"
        }, {
          "name":"西安市雁塔区丈八东路营业部",
          "address":"西安市雁塔区丈八东路金泰假日花城14号楼（签收单返回地址：陕西西安雁塔区子午大道江林新城，否则我部无法接收）",
          "telephone":"029-98564821/1/2/3",
          "tag":"发货  提货",
          "distance":"1.97公里"
        },{
          "name":"西安市雁塔区子午大道营业部",
          "address":"西安市亚那天去子午大道与雁环路十字向北200米子午大道路东，上班时间周内08:30-10:00，周末08:30-17:30,可发货、物流、快递，可刷卡，导航错误，请勿使用",
          "telephone":"029-98564821/1/2/3",
          "tag":"提货",
          "distance":"1.9797米"
        },{
          "name":"西安市高新区西北大道营业部",
          "address":"西安市高新区西部大道与博士路交口向西20米（紫薇田园都市J区32棟2单元2102号）",
          "telephone":"029-98564821/1/2/3",
          "tag":"发货  提货",
          "distance":"2.02"
        },{
          "name":"西安市高新区南窑头营业部",
          "address":"西安市高新区高新六路副36号（科技四路与高新六路被扣100米路西）",
          "telephone":"029-98564821/1/2/3",
          "tag":"发货",
          "distance":"3.1397公里"
        }];
        this.vm.messages = this.websiteList;
      },

    loadMore(){
      this.vm.pagination.currentPage += 1;
      console.log(this.vm.pagination.currentPage);
      this.busy = true;
      this.websiteNewList = [{
        "name":"西安市雁塔区锦业路营业部111",
        "address":"西安市高新区锦业路与丈八三路十字西南角绿地世纪城俱乐部1楼",
        "telephone":"029-98564821/1/2/3",
        "tag":"发货  提货",
        "distance":"1.82米"
      }, {
        "name":"西安市雁塔区丈八东路营业部111",
        "address":"西安市雁塔区丈八东路金泰假日花城14号楼（签收单返回地址：陕西西安雁塔区子午大道江林新城，否则我部无法接收）",
        "telephone":"029-98564821/1/2/3",
        "tag":"发货  提货",
        "distance":"1.97公里"
      },{
        "name":"西安市雁塔区子午大道营业部111",
        "address":"西安市亚那天去子午大道与雁环路十字向北200米子午大道路东，上班时间周内08:30-10:00，周末08:30-17:30,可发货、物流、快递，可刷卡，导航错误，请勿使用",
        "telephone":"029-98564821/1/2/3",
        "tag":"提货",
        "distance":"1.9797米"
      },{
        "name":"西安市高新区西北大道营业部111",
        "address":"西安市高新区西部大道与博士路交口向西20米（紫薇田园都市J区32棟2单元2102号）",
        "telephone":"029-98564821/1/2/3",
        "tag":"发货  提货",
        "distance":"2.02"
      },{
        "name":"西安市高新区南窑头营业部111",
        "address":"西安市高新区高新六路副36号（科技四路与高新六路被扣100米路西）",
        "telephone":"029-98564821/1/2/3",
        "tag":"发货",
        "distance":"3.1397公里"
      }];
      console.log(this.vm.messages);
      console.log(this.websiteList);
      this.vm.messages = this.vm.messages.concat(this.websiteNewList);
      console.log("全新的数据列表");
      console.log(this.vm.messages);
      setTimeout(() => {
        if(this.websiteNewList <10){
          this.showPullMore = false;
        }
        this.busy = false;
      }, 5000);
    },
    searchItem(keyWords){
      console.log(keyWords);
      //根据输入的关键字去过滤信息
    },

    //清空输入的关键字
    clearKeyWords(){
      this.keyWords = '';
    },
    goWebsiteMap(data){
      this.$router.push({path:'/websiteMap',query:{data}});
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
  .search_title{
    position: fixed;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
  }
  .select_location{
    height: 40px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    margin-top: 10px;
    padding: 0 15px;
  }
  .select_location label{
    width: 90px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .select_location input{
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .website_search{
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 15px;
    position: relative;
    background-color: #fff;
    border-radius: 8px;
  }
  .website_search .search_bar{
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }
  .website_search input{
    flex: 1;
    width: 100%;
    height: 35px;
    padding: 0 15px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border:none;
  }

  .search{
    background-image:url(../../assets/image/publicIcon/search.png);
    width: 25px;
    height: 25px;
  }
  .clearIcon{
    background-image:url(../../assets/image/publicIcon/clearKeyWords.png);
    width: 20px;
    height: 20px;
  }
  .website_search .searchIcon{
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    position: relative;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .website_search .searchIcon:before{
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 26px;
    top: 50%;
    margin-top: -13px;
    background-color: #d5d5d5;
  }
  .website_list{
    position: fixed;
    top: 105px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }
  .website_list ul li{
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
  }
  .website_list ul li .website_info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    border-top: 1px solid #d5d5d5;
  }
  .website_info .website_title{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 5px;

  }
  .website_info .website_title h3{
    flex:1;
    font-size: 16px;
    margin: 0;

  }
  .website_info .website_distance{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
  }
  .website_info .website_distance p{
    color: #d61e14;
  }
  .website_item{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 5px 0;
  }
  .website_item p{
    flex: 1;
    padding: 0 10px;
    color: #666;

  }
  .website_operate{
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
  }
  .website_operate .operate_item{
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 0.5;
    border-right: 1px solid #d5d5d5;
  }
  .website_operate .operate_item:last-child{
    border-bottom: none;
  }
  .website_operate .operate_item p{
    padding: 0 5px;
  }
  .toOrder{
    background-image:url(../../assets/image/websiteQuery/toOrder.png);
    width: 20px;
    height: 20px;
  }
  .goHere{
    background-image:url(../../assets/image/websiteQuery/here.png);
    width: 20px;
    height: 20px;
  }
  .tag{
    background-image:url(../../assets/image/websiteQuery/tag.png);
    width: 18px;
    height: 18px;
  }
  .position{
    background-image:url(../../assets/image/websiteQuery/position.png);
    width: 16px;
    height: 16px;
  }
  .telephone{
    background-image:url(../../assets/image/websiteQuery/telephone.png);
    width: 18px;
    height: 18px;
  }
  .address{
    background-image:url(../../assets/image/websiteQuery/address.png);
    width: 18px;
    height: 18px;
  }


</style>

