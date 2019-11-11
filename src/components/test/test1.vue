<template>
<div>
    <!-- 基础用法 -->
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
        <van-button
          block
          @click="showBase = true"
        >
          xxxx
        </van-button>
      </div>

</div>
</template>

<script>
import skuData from './new';
export default {
  data() {
    return {
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
    };
  },

  methods: {
    onBuyClicked() {
      this.$toast('购买成功');
    },

    onAddCartClicked(data) {
      this.$toast('加入购物车');
    }
  }
};
</script>

<style scoped>
  .sku-container {
    padding: 0 15px;
  }
  .demo-sku{
    padding: 0 15px;
  }
  .van-sku-header__img-wrap img {
    width: 100px;
  }
</style>
