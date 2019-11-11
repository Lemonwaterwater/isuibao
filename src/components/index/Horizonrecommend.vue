<template>
  <div>
    <div id="recipe_car_one">
      <img src="./../../assets/sanwenyu.png" alt="" id="recipe_sweet">
       <span id="id_connetct_one">
         <p id="id_connetct_index">美威欧式三文鱼</p>
         
         <p id="id_connetct_tow">下单8折</p>
         <p id="id_connetct_wow">去骨去刺,鲜香,适煎烤</p>
         <p id="id_connetct_sex">(2片装)250G</p>
         <p id="id_connetct_five">￥62.90</p>
         <p id="id_connetct_sex1">产地：智利</p>
         
         <img src="./../../assets/big_shopping.png" alt="" id="id_connetct_botton" @click="showBase = true">
       </span>
    </div>

     <div id="recipe_car_one">
      <img src="./../../assets/xiaren.png" alt="" id="recipe_sweet">
       <span id="id_connetct_one">
         <p id="id_connetct_index">原膳南美白虾仁</p>
         <p id="id_connetct_tow1">第2件19.9元</p>
         <p id="id_connetct_wow">饱满弹嫩,营养低脂</p>
         <p id="id_connetct_sex">(中份)250G</p>
         <p id="id_connetct_five">￥32.90</p>
         <p id="id_connetct_sex1">产地：广东</p>
         
         <img src="./../../assets/big_shopping.png" alt="" id="id_connetct_botton" @click="showBase = true">
       </span>
    </div>

     <div id="recipe_car_one">
      <img src="./../../assets/haishen.png" alt="" id="recipe_sweet1">
       <span id="id_connetct_one">
         <p id="id_connetct_index">梦贝淡干深海野生海参</p>
         
         <p id="id_connetct_tow">单品包邮</p>
         <p id="id_connetct_wow">下单后48小时内发货</p>
         <p id="id_connetct_sex">50G</p>
         <p id="id_connetct_five">￥299.00</p>
         <p id="id_connetct_sex2">产地：美国</p>
         
         <img src="./../../assets/big_shopping.png" alt="" id="id_connetct_botton" @click="showBase = true">
       </span>
    </div>

    <div id="recipe_car_one">
      <img src="./../../assets/shizi.png" alt="" id="recipe_sweet">
       <span id="id_connetct_one">
         <p id="id_connetct_index">陕西甜脆柿</p>
         
         <p id="id_connetct_tow">基地直发</p>
         <p id="id_connetct_wow">咔嚓一口 甜蜜甘甜</p>
         <p id="id_connetct_sex">2.5KG装(150以上一个)</p>
         <p id="id_connetct_five">￥29.00</p>
         <p id="id_connetct_sex1">产地：陕西</p>
         
         <img src="./../../assets/big_shopping.png" alt="" id="id_connetct_botton" @click="showBase = true">
       </span>
    </div>

    <div id="recipe_car_one">
      <img src="./../../assets/xihonshi.png" alt="" id="recipe_sweet">
       <span id="id_connetct_one">
         <p id="id_connetct_index">枝纯串收红番茄</p>
         
         <p id="id_connetct_tow">基地直发</p>
         <p id="id_connetct_wow">饱满多汁 酸甜多味</p>
         <p id="id_connetct_sex">198G*4盒</p>
         <p id="id_connetct_five">￥78.00</p>
         <p id="id_connetct_sex1">产地：甘肃</p>
         <img src="./../../assets/big_shopping.png" alt="" id="id_connetct_botton" @click="showBase = true">
       </span>
    </div>

    <div class="sku-container">
      <van-sku
        v-model="showBase"
        :sku="skuData.sku"
        :goods="skuData.goods_info"
        :goods-id="skuData.goods_id"
        :hide-stock="skuData.sku.hide_stock"
        :quota="skuData.quota"
        :quota-used="skuData.quota_used"
        :initial-sku="initialSku"
        reset-stepper-on-hide
        reset-selected-sku-on-hide
        disable-stepper-input
        :close-on-click-overlay="closeOnClickOverlay"
        :custom-sku-validator="customSkuValidator"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
    </div>
  </div>
</template>

<script>
  import skuData from '../test/new.js';
  export default{
    name: 'Horizonrecommend',
    data: function() {
      return{
        collected_bol: true,
        skuData:skuData,
        showBase: false,
        showCustom: false,
        showStepper: false,
        showSoldout: false,
        closeOnClickOverlay: true,
        initialSku: {
          s1: '30349',
          s2: '1193',
          selectedNum: 3
        },
        customSkuValidator: () => '请选择商品!',
      }
    },
    methods:{
      onBuyClicked() {
        this.$toast('购买成功');
      },

      onAddCartClicked(data) {
        this.$toast('加入购物车');
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #bg_ql{
    font-size: .1rem;
  }
  #id_connetct_five{
    margin-top :.6rem;
    color: #cd5161;
    font-weight: 350;
    font-size: 1.4rem
  }
  #id_connetct_sex{
    color: #717171;
    margin-top: .8rem;
    margin-bottom .8rem;
    font-size: .95rem;
    font-weight 400;
    display: block;
  }
  #id_connetct_sex1{
    color: #717171;
    float:left ;
    margin-left :-8.8rem;
    margin-top: .8rem;
    margin-bottom .8rem;
    font-size: .95rem;
    font-weight 400;
    display: block; 
  }
  #id_connetct_sex2{
    color: #717171;
    float:left ;
    margin-left :-8.3rem;
    margin-top: .8rem;
    margin-bottom .8rem;
    font-size: .95rem;
    font-weight 400;
    display: block; 
  }
  #recipe_car_one{
    height: 10.4rem
    margin: .6rem
    border-radius: .2rem;
    box-shadow: .1rem .1rem .9rem #B8B8B8;
    overflow: hidden;
    display: flex;
  }
  #recipe_sweet{
    margin :auto;
    height: 8rem
    width :8.6rem;
  } 
  #recipe_sweet1{
    margin :auto;
    //height: 8rem
    width :8rem;
  }
  #id_connetct_one{
    display: inline-block;
    height: 7rem;
    flex: 1;
    margin-top: 1rem;
    margin-left: .8rem
  }
  #id_connetct_tow{
    font-weight 300
    margin: .5rem 0;
    border: .08rem solid #f9a80c;
    width: 3.9rem;
    padding: .3rem .9rem;
    border-radius: 3rem;
    color: #f9a80c !important;
    font-size: .89rem
    text-decoration:none !important;
    letter-spacing:3px;
  }

#id_connetct_tow1{
    font-weight 300
    margin: .5rem 0;
    border: .08rem solid #f9a80c;
    width: 5.6rem;
    padding: .3rem 1rem;
    border-radius: 3rem;
    color: #f9a80c !important;
    font-size: .89rem
    text-decoration:none !important;
    letter-spacing:3px;
  }

  #id_connetct_index{
    margin-bottom: .5rem;
    color: #434343 !important;
    font-size :1.2rem;
    font-weight :600;
  }
  #id_connetct_botton{
    margin-top: -2rem;
    float: right
    padding-right: .5rem;
    width: 4rem;
  }
  #collected_img{
    width: 1.2rem;
    float: right;
    margin-top: .3rem;
    margin-top: -2.2rem;
    margin-right: .6rem;
  }
  #id_connetct_wow{
    margin-top:-1.6rem;
    margin-right :.4rem;
    font-size :.85rem;
    float:right;
  }
</style>
