<template>
    <div>
      <div id="center_color">
        <img src="./../../assets/centerBANNER.png" alt="" id="center_img">
        <div id="center_img_vegetables">
          <cube-scroll
            ref="scroll"
            direction="horizontal"
            class="horizontal-scroll-list-wrap">
            <ul class="list-wrapper">
              <Horizontaltow v-for="item in 6" :key="item" class="list-item"></Horizontaltow>
            </ul>
          </cube-scroll>
        </div>

        <p id="center_recipe">热门食谱</p>
        <div id="center_recipe_index">
          <Horizonrecipe></Horizonrecipe>
        </div>
        <p id="center_recipe">为你推荐</p>
        <Horizonrecommend></Horizonrecommend>
        <div id="hjh"></div>
      </div>
    </div>
</template>

<script>
  import Horizontaltow from './Horizontal_2.vue'
  import Horizonrecipe from './Horizonrecipe.vue'
  import Horizonrecommend from './Horizonrecommend.vue'
  export default{
    name: 'Cnterbotton',
    components: {
      Horizontaltow,
      Horizonrecipe,
      Horizonrecommend
    },
    data: function() {
      return{}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #hjh{
    height: 3rem;
  }
  #center_recipe{
    color :#363636;
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: .2rem
    margin-left: 1rem
    margin-bottom: 1rem
  }
  #center_img{
    width: 100%;
    margin-top: .3rem;
  }
  #center_img_vegetables{
    z-index: 2;
    margin-top: -1.6rem;
    max-height: 15rem
    height: 11rem
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
  #center_color{
    background: #fdfcf8;
  }
</style>
