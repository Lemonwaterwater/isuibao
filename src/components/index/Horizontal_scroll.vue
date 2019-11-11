<template>
  <div>
    <div id="center_botton_car">
      <img src="./../../assets/Pork-belly.png" alt="" id="car_img">
      <p id="car_p">五花肉</p>
      <p id="car_p_two">￥5.99</p>
       <del id="car_p_del">￥8.8</del>
       
      <img src="./../../assets/small_shopping.png" alt="" id="car_samll">
    </div>

    <div id="center_botton_car">
      <img src="./../../assets/Meat-roll.png" alt="" id="car_img">
      <p id="car_p">雪花牛肉</p>
      <p id="car_p_two">￥6.99</p>
       <del id="car_p_del">￥8.8</del>
      <img src="./../../assets/small_shopping.png" alt="" id="car_samll">
    </div>

    <div id="center_botton_car">
      <img src="./../../assets/chicken_tow.png" alt="" id="car_img">
      <p id="car_p">鸡肉</p>
      <p id="car_p_two">￥10.99</p>
       <del id="car_p_del">￥8.8</del>
      <img src="./../../assets/small_shopping.png" alt="" id="car_samll">
    </div>
  </div>

</template>
<script>
  export default{
    name: 'Horizon',
    data: function() {
      return{
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #center_botton_car{
    max-width: 7rem;
    display: inline-block;
  }
  #car_img{
     margin: 0 .5rem;
     width: 6rem;
  }
  #car_p{
    font-weight: 900;
    margin-left: 1rem;
    margin-bottom: .5rem;
    margin-top: .4rem;
  }
  #car_p_two{
    font-weight: 600;
    font-size: 1.3rem;
    color: red;
    padding-left: .7rem;
    margin-bottom: .3rem;
  }
  #car_p_del{
     padding-left: 1rem;
     color: gray;
  }#car_samll{
    width: 1.8rem;
    float: right;
    height: 1.8rem;
    margin-top: -0.8rem
  }
</style>
