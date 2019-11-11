<template>
  <div id="guide_index1">
    <van-swipe @change="onChange" :loop="loop_value">
        <van-swipe-item><img src="./../../assets/guide_img1.png" alt="" class="guide_img"></van-swipe-item>
        <van-swipe-item><img src="./../../assets/guide_img2.png" alt="" class="guide_img"></van-swipe-item>
        <van-swipe-item><img src="./../../assets/guide_img3.png" alt="" class="guide_img"></van-swipe-item>
    </van-swipe>
       <img src="./../../assets/anniu.png" alt="" id="guide_anniu" v-show="show_index" @click="onHome()">
  </div>
</template>
<script>
  export default{
    name: 'guide',
    data: function () {
      return{
        loop_value: false,
        visible: true,
        show_index: false
      }
    },
     methods: {
      onChange(index) {
         if(index == 2){
            /* localStorage.setItem("lastname", true);
            this.$router.push('/home'); */
            this.show_index = true;
         }
    },
      onHome: function () {
        this.show_index = false;
        localStorage.setItem("lastnameX", 'true');
        this.$router.push('/home');
      }
  }
 }
</script>
<style>
  #guide_anniu{
    position: absolute;
    bottom: 15%;
    width: 10rem;
    left: 30%;
  }
  #guide_index1{
    position: relative;
    overflow: hidden;
  }
  .van-swipe__indicator{
    width: .6rem !important;
    height: .6rem !important;
    margin: 1rem;
  }
  .guide_img{
    width: 100%;
    height: 100vh;
  }
  .van-swipe__indicator--active{
    background-color: orange !important;
  }

</style>
