
<!-- Home.vue -->
<template>
  <div class="content">
    <div class="more_list">
      <ul>
        <li>
          <label>消息提醒</label>
          <div></div>
        </li>
        <li>
          <label>邀请好友</label>
          <div>
            <i ></i>
          </div>
        </li>
        <li>
          <label>意见反馈</label>
          <div></div>
        </li>
        <li>
          <label>关于App</label>
          <div></div>
        </li>
      </ul>
    </div>
  </div>
  <!--<Footer></Footer>-->
</template>

<script>
  // 导入要用到的子组件
  /*import Header from '../../components/Header'
  import Footer from '../../components/Footer'*/

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

<style>
  .content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .more_list{
    background-color: #fff;
    margin-top: 10px;
  }
  .more_list ul{

  }
  .more_list ul li{
    height: 45px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d5d5d5;
    padding: 0 15px;
    position: relative;
  }
  .more_list ul li:first-child{
    border-top: 1px solid #d5d5d5;
  }
  .more_list ul li:first-child:after{
    display: none;
  }
  .more_list ul li:after{
    position: absolute;
    content: '';
    right: 15px;
    top: 50%;
    margin-top: -8px;
    background-image: url(../../assets/image/publicIcon/rightArrow.png);
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: contain;
    background-size: contain;
    vertical-align: middle;
  }
  .more_list ul li label{

  }

</style>

