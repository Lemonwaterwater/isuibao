<template>
  <div class="scroll-list-wrap">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <Header></Header>
      <Center></Center>
      <Centerbotton></Centerbotton>
      <Button1></Button1>
    </van-pull-refresh>  
  </div>
</template>
<script>
import Header from "./header.vue"
import Center from "./center.vue"
import Centerbotton from "./center_botton.vue"
import Button1 from "./button1.vue"
  export default{
    name: 'Home_index',
    data: function () {
      return{
        isLoading: false
      }
    },
    components: {
      Header,
      Center,
      Centerbotton,
      Button1
    },
      methods: {
        onRefresh() {
          setTimeout(() => {
            this.$toast('刷新成功');
            this.isLoading = false;
          }, 500);
        }
      }
  }
</script>
<style>

</style>
