<template>
  <div>
    <div id="center_img_car">
      <img src="./../../assets/tomato.png" alt="" id="center_car">
      <p id="center_p">新疆库尔雷精选西红柿</p>
      <p id="center_mony">￥86<span id="center_mony_chi">/ 3kg</span></p>
      <img src="./../../assets/small_shopping.png" alt="" id="car_samll">
    </div>
  </div>
</template>

<script>
  export default{
    name: 'Horizontow'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #center_car{
    width: 9rem;
    margin-left: .8rem;
    max-height: 12rem;
  }
  #center_img_car{
    max-width: 10rem;
  }
  #center_p{
    font-weight: 800;
    font-size: .8rem;
    margin-left: 1.1rem;
    margin-top: .3rem;
    overflow: hidden; /*溢出删除*/
    white-space: nowrap; /*多行删到一行*/
    text-overflow: ellipsis; /*多出的变...*/
    width: 7rem;
  }
  #center_mony{
    color: red;
    margin-left: 1rem;
    margin-top: .3rem
  }
  #center_mony_chi{
    color: gray;
    margin-left: .3rem;
    font-size: .8rem
  }
  #car_samll{
    width: 1.8rem;
    float: right;
    height: 1.8rem;
    margin-top: -1.2rem
  }
</style>
