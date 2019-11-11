<template>
  <div>
    <div id="center_one">
      <div id="center_top">
        <img src="./../../assets/iocn-clock.png" alt="" id="clock_icon">
        <span id="Panic_buying">限时抢购</span>
         <div id="cneter_time">
           <span id="Remaining">剩余</span>

           <van-count-down :time="time">
             <template v-slot="timeData" id="mke">
               <span class="item">{{ timeData.hours }}</span>:
               <span class="item">{{ timeData.minutes }}</span>:
               <span class="item">{{ timeData.seconds }}</span>
             </template>
           </van-count-down>

            <i class="cubeic-arrow"></i>
         </div>
         <hr>
      </div>

      <div id="center_botton">

        <cube-scroll
          ref="scroll"
          direction="horizontal"
          class="horizontal-scroll-list-wrap">
          <ul class="list-wrapper">
            <Horizontal v-for="item in 2" class="list-item"></Horizontal>
          </ul>
        </cube-scroll>
      </div>

    </div>

  </div>
</template>

<script scoped>
import Horizontal from './Horizontal_scroll.vue'

  export default{
    name: "center1",
    data: function() {
      return{
        time: 30 * 60 * 60 * 1000
      }
    },
    components:{
      Horizontal
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .van-count-down .item{
    font-size: .95rem;
  }
  .horizontal-scroll-list-wrap{
    border: 1px solid rgba(0, 0, 0, 0.1)
    border-radius: 5px
  }
  .cube-scroll-content{
    display: inline-block
  }
    .list-wrapper{
      white-space: nowrap
      }
    .list-item{
      display: inline-block
      }
  #center_one{
    height: 16rem;
    border-radius: .8rem;
    box-shadow: .2rem .1rem .9rem #B8B8B8;
    margin: .3rem;
  }
  #center_top{
    padding: .8rem;
  }
  #clock_icon{
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: middle;
    margin-right: .3rem;
  }
  #Panic_buying{
        display: inline-block;
        vertical-align: middle;
        font-weight:900;
  }
  #cneter_time{
    float: right;
  }
  .item {
    display: inline-block;
    width: 1.3rem;
    margin-right: 5px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #000000;
    padding: .3rem 0;
  }
  .van-count-down{
    display: inline-block;
  }
  .cubeic-arrow{
    font-size: .9rem;
  }
  #Remaining{
    font-size: .8rem;
    margin-right: .3rem;
  }
</style>
