<template>
  <Container>
    <ul class="product-list">
      <li
        class="product-list__item"
        v-for="product in productList"
        :key="product.id"
      >
        <TheProduct :product="product" />
      </li>
    </ul>
    <!-- <carousel :items-to-show="4">
      <slide v-for="slide in 10" :key="slide">
        <TheProduct />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel> -->
  </Container>
</template>

<script lang="ts" setup>
import Container from "../Container/index.vue";
import TheProduct from "./TheProduct.vue";
import { productList } from "@/data/productList";
</script>

<style lang="scss">
.carousel__next {
  background-color: transparent;
}
.carousel__icon {
  fill: #333;
}

.carousel__slide {
  position: relative;
}

.product-list {
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 90px;
  min-height: 450px;

  display: flex;

  @media (max-width: 1200px) {
    overflow-x: auto;
    overflow-y: visible;
  }
}

.product-list__item {
  height: 343px;
  width: calc(100% / 4 - 15px);
  margin-left: 15px;
  margin-right: 15px;

  position: relative;

  @media (max-width: 1200px) {
    min-width: 278px;
  }
}
</style>
