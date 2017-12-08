
<!-- Home.vue -->
<template>
  <div class="content">
    <div class="map_content" id="allmap"></div>
  </div>
</template>

<script>
  // 导入要用到的子组件
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        parms:{}

      }
    },
    mounted(){
      this.getInitData();
      this.initMap();
    },

    methods:{
      getInitData(){
        this.parms = this.$route.query;
        console.log(this.parms);
      },
      initMap(){
        // 百度地图API功能  初始化地图
        var map = new BMap.Map("allmap");    // 创建Map实例
        map.centerAndZoom("西安", 11);  // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.setCurrentCity("西安");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
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
  .map_content{
    width: 100%;
    height: 250px;
  }


</style>

