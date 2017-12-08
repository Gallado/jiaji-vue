<!-- Swiper.vue -->
<template>
  <div class="swiper-content">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/image/home/home_ad.jpg" class="" alt=""/>
        </div>
        <div class="swiper-slide">
          <img src="../assets/image/home/home_ad.jpg" class="" alt=""/>
        </div>
        <div class="swiper-slide">
          <img src="../assets/image/home/home_ad.jpg" class="" alt=""/>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
    </div>
  </div>
</template>
<script>
  import Swiper from '../../static/js/swiper-3.3.1.min.js'
  export default {
    data () {
      return {
        parentData:{}
      }
    },
    props:['swiperData'],
    components: {},
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination'
      });
      this.getParentData();
  },
    methods:{
      getParentData(){
        this.parentData = this.swiperData;
        console.log(this.parentData);
        this.setAnotherData(this.parentData);
      },
      setAnotherData(data){

        this.parentData = {"name":"wing","age":20,"phone":"15619398086"};
        console.log(this.parentData);
        this.$emit('listenToChild',this.parentData);

      }
    }
  }
</script>
<style>
  @import '../../static/js/swiper-3.3.1.min.css';
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
  .swiper-content{
    height: 180px;
    width: 100%;
  }
  .swiper-container{
    height: 100%;
  }
</style>
