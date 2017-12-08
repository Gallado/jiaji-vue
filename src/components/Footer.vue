<template>
  <footer class="footer">
    <ul>
      <router-link :to="{name:'Home'}" tag="li" exact>
        <i class="icon home" :class="{'homeActive':$route.name == 'Home'}"></i>
        <p :style="{'color':$route.name == 'Home'?'#d61e14':''}">首页</p>
      </router-link>
      <router-link :to="{name:'Discovery'}" tag="li">
        <i class="icon discover" :class="{'discoverActive':$route.name == 'Discovery'}"></i>
        <p :style="{'color':$route.name == 'Discovery'?'#d61e14':''}">发现</p>
      </router-link>
      <router-link :to="{name:'PersonCenter'}" tag="li">
        <i class="icon person" :class="{'personActive':$route.name == 'PersonCenter'}"></i>
        <p :style="{'color':$route.name == 'PersonCenter'?'#d61e14':''}">我的</p>
      </router-link>
      <router-link :to="{name:'More'}" tag="li">
        <i class="icon more" :class="{'moreActive':$route.name == 'More'}"></i>
        <p :style="{'color':$route.name == 'More'?'#d61e14':''}">更多</p>
      </router-link>
    </ul>
  </footer>
</template>

<style>
  .footer{
    display: flex;
    align-items: center;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top:1px solid #d5d5d5;

  }
  .footer ul{
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
  }
  .footer ul li{
    height: 100%;
    flex:0.25;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .footer ul li p{
  }
  .home{
    background-image:url(../assets/image/publicIcon/home.png);
    width: 25px;
    height: 25px;
  }
  .homeActive{
    background-image:url(../assets/image/publicIcon/homeActive.png);
    width: 25px;
    height: 25px;
  }
  .discover{
    background-image:url(../assets/image/publicIcon/discover.png);
    width: 25px;
    height: 25px;
  }
  .discoverActive{
    background-image:url(../assets/image/publicIcon/discoverActive.png);
    width: 25px;
    height: 25px;
  }
  .person{
    background-image:url(../assets/image/publicIcon/person.png);
    width: 25px;
    height: 25px;
  }
  .personActive{
    background-image:url(../assets/image/publicIcon/personActive.png);
    width: 25px;
    height: 25px;
  }
  .more{
    background-image:url(../assets/image/publicIcon/more.png);
    width: 25px;
    height: 25px;
  }
  .moreActive{
    background-image:url(../assets/image/publicIcon/moreActive.png);
    width: 25px;
    height: 25px;
  }

</style>
<script>
  export default {
    data () {
      return {
      }
    },
    mounted(){
    },
    methods:{
    },
    // 在components字段中，包含导入的子组件
    components: {
    }
  }
</script>
