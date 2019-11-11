<template>
  <div>
    <div id="recipe_car_one">
      <img src="./../../assets/Recipe_sweet.png" alt="" id="recipe_sweet">
       <span id="id_connetct_one">
         <p id="id_connetct_index">家庭烤红薯</p>
         <img src="./../../assets/Not-collected.png" alt="" id="collected_img" v-show="collected_bol" @click="collected(1)">
          <img src="./../../assets/collected.png" alt="" id="collected_img" v-show="!collected_bol" @click="collected(1)">
         <p id="id_connetct_tow">主料：红薯</p>
         <!-- <p id="id_connetct_tow">辅料：黑胡椒，荔枝壳</p> -->
         <p id="id_connetct_tow1">每每在街头小巷问道一个味道，都忍不住让馋得流口水，这就是烤红薯。于是一有时间我就烤上几个，解馋。</p>
          <p id="id_connetct_botton">查看详细做法</p>


         <van-popup v-model="show">内容</van-popup>
       </span>
    </div>

    <div id="recipe_car_one">
      <img src="./../../assets/Four-hi.png" alt="" id="recipe_sweet">
       <span id="id_connetct_one">
         <p id="id_connetct_index">四喜烤麸</p>
         <img src="./../../assets/Not-collected.png" alt="" id="collected_img" v-show="collected_bol" @click="collected(2)">
        <img src="./../../assets/collected.png" alt="" id="collected_img" v-show="!collected_bol" @click="collected(2)">
         <p id="id_connetct_tow">主料：烤麸</p>
         <p id="id_connetct_tow1">四喜栲麸，是上海很传统很经典的小菜，色酱红，味道咸中带甜，香浓醇厚。曾在楼下的熟食店买了些四喜烤麸，先生和闺女都很喜欢。</p>
         <p id="id_connetct_botton">查看详细做法</p>
       </span>
    </div>

    <div id="recipe_car_one">
      <img src="./../../assets/Pork-ribs.png" alt="" id="recipe_sweet">
       <span id="id_connetct_one">
         <p id="id_connetct_index">玫瑰腐乳烤排骨</p>
         <img src="./../../assets/Not-collected.png" alt="" id="collected_img" v-show="collected_bol" @click="collected(3)">
        <img src="./../../assets/collected.png" alt="" id="collected_img" v-show="!collected_bol" @click="collected(3)">
         <p id="id_connetct_tow">主料：猪大排</p>
         <!-- <p id="id_connetct_tow">辅料：黑胡椒，荔枝壳</p> -->
        <p id="id_connetct_tow1">玫瑰腐乳烧排骨。这是我家经常吃的一道菜，做这道排骨的时候我会专门选脆骨多一点的肋排，配着米饭吃过瘾了！</p>
         <p id="id_connetct_botton">查看详细做法</p>
       </span>
    </div>

    <div id="recipe_car_one">
      <img src="./../../assets/dapanji.png" alt="" id="recipe_sweet">
       <span id="id_connetct_one">
         <p id="id_connetct_index">大盘鸡（居家版）</p>
         <img src="./../../assets/Not-collected.png" alt="" id="collected_img" v-show="collected_bol" @click="collected(2)">
        <img src="./../../assets/collected.png" alt="" id="collected_img" v-show="!collected_bol" @click="collected(2)">
         <p id="id_connetct_tow">主料：三黄鸡、土豆</p>
         <p id="id_connetct_tow1">大盘鸡为新疆著名的特色菜肴，起源于90年代初期，主要是鸡块和土豆块，配皮带面烹饪而成，大盘鸡色彩鲜艳，有爽滑麻辣的鸡肉和软糯......</p>
         <p id="id_connetct_botton1">查看详细做法</p>
       </span>
    </div>

    
  </div>
</template>

<script>
  export default{
    name: 'Horizonrecipe',
    data: function() {
      return{
        collected_bol: true,
        show: false
      }
    },
    methods:{
      collected: function(num) {
        if(this.collected_bol){
          this.collected_bol = false;
          this.$notify.clear();
          this.$toast.loading({
             message: '加载中',
             forbidClick: true,
             duration: 800.,
             onOpened: function() { this.$notify({ type: 'success', message: '收藏成功' , duration: 1000 }); }
           });
          //this.$notify({ type: 'success', message: '收藏成功' , duration: 1000 });
        }
        else{
          this.collected_bol = true;
          this.$notify.clear();
          this.$toast.loading({
             message: '加载中',
             forbidClick: true,
             duration: 400.,
             onOpened: function() { this.$notify({ type: 'warning', message: '取消收藏成功' , duration: 500 , background: 'red'}); }
           });
         // this.$notify({ type: 'warning', message: '取消收藏成功' , duration: 1000 , background: 'red'});
        }
      },
          showPopup() {
            this.show = true;
          }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .van-notify--success,.van-notify--warning{
    line-height: 2rem !important;
    height: 2rem !important;
  }
  .van-toast{
    padding: 2rem !important;
  }
  .van-toast__text{
    padding-top: .6rem !important;
  }
  #recipe_car_one{
    background-color :white;
    height: 8rem
    margin: .5rem .5rem .8rem .5rem
    border-radius: .2rem;
    box-shadow: .1rem .1rem .3rem #B8B8B8;
    overflow: hidden;

    display: flex;
  }
  #recipe_sweet{
    height: 8rem
  }
  #id_connetct_one{
    display: inline-block;
    height: 7rem;
    flex: 1;
    margin-top: 1rem;
    margin-left: .8rem
  }
  #id_connetct_tow{
    color :#363636 !important;
    max-width: 10rem;
    overflow: hidden; /*溢出删除*/
    white-space: nowrap; /*多行删到一行*/
    text-overflow: ellipsis; /*多出的变...*/
    margin: .5rem 0;
    font-size: .78rem;
    text-decoration: underline;
  }
  #id_connetct_index{
    // font-weight: 350;
    letter-spacing: .1rem;
    margin-bottom: .8rem;
    color: black !important;
  }
  #id_connetct_botton{
    color: orange !important;
    font-size: .8rem;
    margin-top: -.1rem;
   //  padding-top: .5 rem;
    float: right
    padding-right: .5rem
  }
  #id_connetct_botton1{
    color: orange !important;
    font-size: .8rem;
    margin-top: -1rem;
   //padding-top: .5 rem;
    float: right
    padding-right: .5rem
  }
  #id_connetct_one p{
    color: #B8B8B8;
    
  }
  #collected_img{
    width: 1.2rem;
    float: right;
    margin-top: .3rem;
    margin-top: -2.2rem;
    margin-right: .6rem;
  }
  #id_connetct_tow1{
    margin-top:.6rem;
    font-size .78rem;
    color :#838383!important;
    font-weight 200;
    line-height:36px;
    padding-bottom:.2rem;
  }
</style>
