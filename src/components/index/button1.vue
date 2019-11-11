<template>
    <van-tabbar v-model="active" id="button_index" active-color="orange" safe-area-inset-bottom>
    <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item icon="cart-o" id="icon_4">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
  export default{
    name: 'button1',
    data: function() {
      return {
         active: 0
      }
    }
  }
</script>

<style scoped>
  .van-tabbar >>> .van-tabbar-item{
    font-size: 1rem;
  }
  .van-tabbar >>> .van-icon{
    font-size: 1.3rem;
  }
  #button_index{
    display: flex;
    justify-content: space-around;
    height: 3rem;
    border: .03rem solid #B8B8B8;
    margin: .03rem;
    box-shadow: .1rem .1rem .9rem #B8B8B8;
    font-size: 1.7rem;
    align-items: center;
  }

</style>
