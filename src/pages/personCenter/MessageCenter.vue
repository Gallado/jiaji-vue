
<!-- Home.vue -->
<template>
  <div class="content">
    <div>
      <ul>
        <li v-for="(item, index) in vm.messages" :key="item.name" @click="goMessagedetail(index,item)">
          <div class="item_Img">
            <img class="img" src="../../assets/image/personCenter/loginImg.png">
          </div>
          <div class="item_info">
            <p>{{item.name}}</p>
            <p>{{item.subTitle}}</p>
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
  import Header from '../../components/Header'

  export default {
    data () {
      return {
        count: 0,
        messageList: [],
        messageNewList: [],
        busy: false,
        showPullMore:true,
        vm: {
          messages: [],
          pagination: {
            perPage: 7,
            currentPage: 1
          }
        }
      }
    },
    mounted(){
      this.init();
    },

    methods:{
      init(){
        /*services.getMessages({perPage: vm.pagination.perPage, page: vm.pagination.currentPage}, function (data) {
             vm.messages = data;
             })*/
        this.messageList = [{
          name:"message list 1",
          subTitle:"message one subtitle"
        },{
          name:"message list 2",
          subTitle:"message one subtitle"
        },{
          name:"message list 3",
          subTitle:"message one subtitle"
        },{
          name:"message list 4",
          subTitle:"message one subtitle"
        },{
          name:"message list 5",
          subTitle:"message one subtitle"
        },{
          name:"message list 6",
          subTitle:"message one subtitle"
        },{
          name:"message list 7",
          subTitle:"message one subtitle"
        },{
          name:"message list 8",
          subTitle:"message one subtitle"
        }];
        this.vm.messages = this.messageList;
      },
      loadMore(){
        this.vm.pagination.currentPage += 1;
        console.log(this.vm.pagination.currentPage);
        this.busy = true;
        this.messageNewList = [{
          name:"new message list 1",
          subTitle:"message one subtitle"
        },{
          name:"new message list 2",
          subTitle:"message one subtitle"
        },{
          name:"new message list 3",
          subTitle:"message one subtitle"
        },{
          name:"new message list 4",
          subTitle:"message one subtitle"
        },{
          name:"new message list 5",
          subTitle:"message one subtitle"
        },{
          name:"new message list 6",
          subTitle:"message one subtitle"
        },{
          name:"new message list 7",
          subTitle:"message one subtitle"
        },{
          name:"new message list 8",
          subTitle:"message one subtitle"
        }];
        console.log(this.vm.messages);
        console.log(this.messageList);
        this.vm.messages = this.vm.messages.concat(this.messageNewList);
        console.log("全新的数据列表");
        console.log(this.vm.messages);
        setTimeout(() => {
          if(this.messageNewList <10){
            this.showPullMore = false;
          }
          this.busy = false;
        }, 5000);
      },
      goMessagedetail(index,data){
        console.log(data);
        this.$router.push({path:'/messageDetail',query:data});
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
  ul{
    color: #666;
    font-size: 14px;

    transition: all .4s;
  }
  ul li{
    padding: 10px 15px;
    margin-bottom: 10px;
    background: #eee;
    display: flex;
    flex-direction: row;
    align-items: stretch;

  }
  ul li .item_Img{
    width: 50px;
    height: 50px;
  }
  ul li .item_Img img{
    border-radius: 50px;

  }
  ul li .item_info{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px;


  }
  ul li .item_info p{

  }



</style>

