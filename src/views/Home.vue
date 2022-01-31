<template>
  <div class="home">
    <ProductsList />
    <PopularProducer />
    <ShopInfo />
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
import TheFooter from "@/components/TheFooter/index.vue";
import ShopInfo from "@/components/ShopInfo/ShopInfo.vue";
import PopularProducer from "@/components/PopularProducer/PopularProducer.vue";
import TheProduct from "@/components/ProductsList/TheProduct.vue";
import ProductsList from "@/components/ProductsList/ProductsList.vue";
</script>
