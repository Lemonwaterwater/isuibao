<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-sticky>
        <van-nav-bar title="双十一活动详情" left-arrow>
          <i class="cubeic-share dome_idn" slot="right"></i>
        </van-nav-bar>
        </van-sticky>
        <van-notice-bar
          text="i岁宝大活动了,赶紧抢购吧,妈妈我想去i岁宝买东西,买,买100000元够吗,够了谢谢妈妈,妈妈真好"
          left-icon="volume-o"
        />
        <div id="bg">
          <img src="./../../assets/bg.png" alt="" id="bg_img">
          <div id="zindex">
            <img src="./../../assets/bg-top.png" alt="" id="bg_img_top">
            <div align="center" id="bg_img_Co">
              <img src="./../../assets/Collar.png" alt="" id="bg_img_Collar">
            </div>
          <div id="Voucher_index" align="center">
            <img src="./../../assets/Voucher/Voucher-10.png" v-show="collected_bol" @click="collected(1)" alt="" class="Voucher_index_mony" id="Voucher_index_10">
            <img src="./../../assets/Voucher/Voucher-10NO.png" v-show="!collected_bol" @click="collected(1)" alt="" class="Voucher_index_mony" id="Voucher_index_10">
            <img src="./../../assets/Voucher/Voucher-20.png" alt="" v-show="collected_bol_2" @click="collected(2)" class="Voucher_index_mony">
            <img src="./../../assets/Voucher/Voucher-20NO.png" v-show="!collected_bol_2" @click="collected(2)" alt="" class="Voucher_index_mony">
            <img src="./../../assets/Voucher/Voucher-50.png" alt="" class="Voucher_index_mony" id="Voucher_index_10" v-show="collected_bol_3" @click="collected(3)">
            <img src="./../../assets/Voucher/Voucher-50NO.png" alt="" class="Voucher_index_mony" id="Voucher_index_10" v-show="!collected_bol_3" @click="collected(3)">
            <img src="./../../assets/Voucher/Voucher-100.png" alt="" class="Voucher_index_mony" v-show="collected_bol_4" @click="collected(4)">
            <img src="./../../assets/Voucher/Voucher-100NO.png" alt="" class="Voucher_index_mony" v-show="!collected_bol_4" @click="collected(4)">
          </div>

          <div id="gift-box" align="center">
            <img src="./../../assets/gift-box.png" alt="" id="gift_box_img">
          </div>

          <div id="Spike">
            <img src="./../../assets/Gift-box1.png" alt="" class="Gift-box Gift-box-1">
            <img src="./../../assets/Snatch-button.png" alt="" class="Gift-box-button">
            <img src="./../../assets/Gift-box2.png" alt="" class="Gift-box">
            <img src="./../../assets/Snatch-button.png" alt="" class="Gift-box-button">
            <img src="./../../assets/Gift-box3.png" alt="" class="Gift-box">
            <img src="./../../assets/Snatch-button.png" alt="" class="Gift-box-button">
            <img src="./../../assets/Gift-box4.png" alt="" class="Gift-box">
            <img src="./../../assets/Snatch-button.png" alt="" class="Gift-box-button">
          </div>

          <div id="Popular-sales" align="center">
            <img src="./../../assets/Popular.png" alt="" id="Popular-sales-img">
          </div>

          <div id="Popular-sales-tow">
            <div class="Popular Popular_index">
              <img src="./../../assets/Popular-sales/pigeon.png" alt="" class="Popular-1">
              <div class="Popular-2">
                <span class="Popular-2-1">宗明生态乳鸽</span>
                <br>
                <span class="Popular-2-2">约300g</span>
                <img src="./../../assets/Popular-sales/49.90RMB.png" alt="" class="Popular-2-3">
              </div>
              <img src="./../../assets/Popular-sales/button-buying.png" alt="" class="Popular-2-4">
              <img src="./../../assets/Popular-sales/Evaluation.png" alt="" class="Popular-2-5">
            </div>
            <div class="Popular" v-for="item in 2">
              <img src="./../../assets/Popular-sales/pigeon.png" alt="" class="Popular-1">
              <div class="Popular-2">
                <span class="Popular-2-1">宗明生态乳鸽</span>
                <br>
                <span class="Popular-2-2">约300g</span>
                <img src="./../../assets/Popular-sales/49.90RMB.png" alt="" class="Popular-2-3">
              </div>
              <img src="./../../assets/Popular-sales/button-buying.png" alt="" class="Popular-2-4">
              <img src="./../../assets/Popular-sales/Evaluation.png" alt="" class="Popular-2-5">
            </div>

          </div>

          <van-tabbar>
              <img src="./../../assets/shouye/shouye-home.png" alt="" id="button_host_1">
              <img src="./../../assets/shouye/shopping-cart.png" alt="" id="button_host_2">
              <img src="./../../assets/shouye/top-button.png" alt="" id="button_host_3" @click="backTop()">
          </van-tabbar>


          </div>
        </div>
      </div>
    </van-pull-refresh>
</template>

<script>

  export default{
    name: 'activity',
    data: function () {
      return{
        collected_bol: true,
        collected_bol_2: true,
        collected_bol_3: true,
        collected_bol_4: true,
        isLoading: false
      }
    },
    methods:{

        backTop () {
            const that = this;
            let timer = setInterval(() => {
              let ispeed = Math.floor(-that.scrollTop / 5)
              document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
              if (that.scrollTop === 0) {
                clearInterval(timer)
              }
            }, 16)
        },
          scrollToTop () {
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            if (that.scrollTop > 60) {
              that.btnFlag = true;
            } else {
              that.btnFlag = false;
            }
        },
        collected: function(num) {
            if(num == 1){
              console.log(1)
              this.collected_bol = false;
              this.$notify.clear();
              this.$toast.loading({
                 message: '加载中',
                 forbidClick: true,
                 duration: 800.,
                 onOpened: function() { this.$notify({ type: 'success', message: '领取成功' , duration: 1000 }); }
               });
            }
            if(num == 2){
              this.collected_bol_2 = false;
              this.$notify.clear();
              this.$toast.loading({
                 message: '加载中',
                 forbidClick: true,
                 duration: 800.,
                 onOpened: function() { this.$notify({ type: 'success', message: '领取成功' , duration: 1000 }); }
               });
            }
            if(num == 3){
              this.collected_bol_3 = false;
              this.$notify.clear();
              this.$toast.loading({
                 message: '加载中',
                 forbidClick: true,
                 duration: 800.,
                 onOpened: function() { this.$notify({ type: 'success', message: '领取成功' , duration: 1000 }); }
               });
            }
            if(num == 4){
              this.collected_bol_4 = false;
              this.$notify.clear();
              this.$toast.loading({
                 message: '加载中',
                 forbidClick: true,
                 duration: 800.,
                 onOpened: function() { this.$notify({ type: 'success', message: '领取成功' , duration: 1000 }); }
               });
            }

        },
            onRefresh() {
              setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
                this.count++;
              }, 500);
            }

    },
    mounted: function() {
      var self = this;
      const sd = document.getElementsByClassName('van-nav-bar__left');
      sd[0].onclick = function () {
        self.$router.push('/home');
      }
      window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollToTop)
    }
 }
</script>

<style lang="stylus" scoped>
  .van-nav-bar >>> .van-nav-bar__right{
    line-height: 2.1rem !important;
  }

  .van-notice-bar{
    height: 25px !important;
    font-size: 1.5rem;
  }
  .van-icon-volume-o{
    font-size: 1.426667rem !important;
  }
  .van-notice-bar__wrap{
    overflow: auto !important;
  }

  .van-notice-bar{
    z-index: 30;
  }
  .scroll-list-wrap{
    height: 40rem;
  }
  .tabbar_img{
    width: 50%;
    height: 2rem;
  }
  .van-hairline--top-bottom{
    height: 3rem;
    background: orange;
    z-index: 30 !important;
  }
  #bg{
    flex: 1;
  }
  #index-id{
    display: flex;
    flex-direction: column;
  }
  html {
  	width:100%;
  	height:100%;
  	-webkit-font-smoothing:antialiased;
  }
  body{
    min-height: 100%;
  }
  #button_host_3{
        width: 50%;
        align-self: flex-end;
        margin-left: 3rem;
  }
  #button_host_2{
    width: 13%;
    height: 2.5rem;
    margin-top: .2rem;
  }
  #button_host_1{
    margin-right: .5rem;
    width: 13%;
    padding-left: 1rem;
    height: 2.5rem;
    margin-top: .2rem;
  }
  #button_host{
        position: relative;
        top: -11rem;
        padding-left: 2rem;
        display: flex;
        background: orange;
  }
  .Popular_index{
    margin-top: -3rem;
  }
  .Popular{
    margin-top: 2rem;
  }
  #Popular-sales-tow{
    position: relative;
    top: -12rem;
    margin-top: -3rem;
  }
  .Popular-2-5{
    width: 90%;
    margin: 0 auto;
    display: block;
    margin-top: 1.5rem;
  }
  .Popular-2-4{
    float: right;
    width: 50%;
    margin-right: 1rem;
    margin-top: -1.2rem;
  }
  .Popular-2-3{
    width: 60%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .Popular-2-1{
    color: white;
    font-weight: 600;
    font-size: 1.3rem;
  }
  .Popular-2-2{
    color: white;
    margin-top: 1rem;
    display: block;
  }
  .Popular-2{
    float: right;
    margin-right: 2rem;
  }
  .Popular-1{
    width: 45%;
  }
  #Popular-sales-img{
    width: 80%;
  }
  #Popular-sales{
    position: relative;
    top: -13rem;
  }
  .Gift-box-button{
    position: relative;
    width: 25%;
    z-index: 4;
    float: right;
    margin-right: .5rem;
    top: -2.5rem;
  }
  .Gift-box-1{
    margin-top: .8rem;
  }
  #Spike{
    position: relative;
    top: -12rem;
  }
  .Gift-box{
    width: 98%;
  }
  #gift_box_img{
    width: 18rem;
  }
  #gift-box{
    position: relative;
    top: -11.2rem;
  }
  .van-nav-bar{
    height: 2.7rem !important;
  }
  .van-nav-bar__left,.van-nav-bar__title,.van-nav-bar__right{
    line-height: 2.7rem !important;
    font-size: 1.1rem !important;
    font-weight: 600;
  }
  .van-icon-arrow-left{
    color: black !important;
    font-size: 1.5rem;
  }
  .cubeic-share{
    font-size: 1.4rem;
  }
  #bg_img{
    width: 100%;
    height: 100%;
    z-index: -10;
  }
  #zindex{
    position: absolute;
    top: 2.7rem;
    height: 0;
  }

  #bg_img_top{
    width: 100%;
    z-index: -9;
  }
  #bg_img_Co{
    top: -9rem;
    position: relative;
    z-index: 2;
  }
   #bg_img_Collar{
     width: 14rem;
   }
   #Voucher_index{
     position: relative;
     top: -12rem;
     z-index: 1;
   }
  .Voucher_index_mony{
    width: 47%;
  }
  #Voucher_index_10{
    margin-right: .5rem
  }
</style>
