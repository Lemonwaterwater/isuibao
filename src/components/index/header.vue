<template>
  <div>
  <div class="header1_top">
      <div id="header1_one">
        <div id="header1_one_one">
          <img src="./../../assets/icon_dingwei.png" alt="" id="dingwei">
          <span id="header1_one_span">深圳技师学院</span>
          <i class="cubeic-select"></i>
          <img src="./../../assets/iocn-select.png" alt="" id="header1_one_img">
        </div>
      </div>
  </div>
  <div class="header1_select">
    <van-search placeholder="瘦肉" shape="round" id="header1_select_one" :clearable="clearable_1"/>
  </div>
  <div class="header1_img">
    <van-skeleton :row="13" :loading="loading" >
      <transition name="van-fade">
        <router-link to="activity">
          <img src="./../../assets/BANNER.png" alt="" id="header1_img_one" v-show="!loading">
        </router-link>
      </transition>
    </van-skeleton>
  </div>

<van-row type="flex" justify="space-around">
  <img src="./../../assets/ck_1.png" alt="" span="1" class="vegetables">
  <img src="./../../assets/to_2.png" alt="" span="1" class="vegetables">
  <img src="./../../assets/fs_3.png" alt="" span="1" class="vegetables">
  <img src="./../../assets/or_4.png" alt="" span="1" class="vegetables">
</van-row>


  </div>
</template>

<script>
export default {
  name: 'header1',
  props: {
    msg: String
  },
  data: function() {
    return {
      loading: true,
      clearable_1: false
    }
  },
  mounted(){
      var _this = this;
      setTimeout(function(){ _this.loading = false }, 400);
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #header1_select_one{
    font-size: 1rem;
  }
  .header1_select >>> .van-icon-search{
        font-size: 1rem;
  }
    .header1_top{
      height: 3rem;
      border: .002rem solid #F5F5F5;
      border-top: 0;
    }
    #header1_one{
      padding: 1rem;
    }
    #header1_one_span{
      font-size: 1rem;
    }
    .cubeic-select{
      font-size: .8rem;
      padding-left: .3rem;
    }
    #dingwei{
      width: .6rem;
      padding-right: .4rem;
      }
    #header1_one_img{
      float: right;
      width: 1.1rem;
    }
    .header1_select{
      padding: .05rem 1rem;
    }
    #header1_img_one{
      width: 100%;
      border-radius: .8rem;
    }
    .vegetables{
      width: 3rem;
      height: 4rem;
    }
    .van-field__control{
      height: 1.5rem
    }
    .van-field__left-icon{
      line-height: 1.5rem;
      margin-left: .3rem;
    }
</style>
