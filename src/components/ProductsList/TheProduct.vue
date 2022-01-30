<template>
  <article class="product-card">
    <img class="product-card__image" src="@/assets/images/image7.png" alt="" />
    <StarRating
      class="product-card__rating"
      :rating="4"
      active-color="#FADE56"
      inactive-color="#E7E7E7"
      :star-size="18"
      text-class="rating-text"
    />
    <p class="product-card__price">
      <span class="product-card__price-now">2 500 &#8381;</span>
      <span class="product-card__price-old">3200 &#8381;</span>
    </p>

    <h3 class="product-card__title">
      Yokohama BluEarth *Winter V905 205 45 R17 88V
    </h3>
  </article>
</template>

<script lang="ts" setup>
import StarRating from "vue-star-rating";
</script>

<style lang="scss">
@import "./TheProduct";
.rating-text {
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #333333;
}
</style>
