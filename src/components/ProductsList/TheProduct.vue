<template>
  <article
    class="product-card"
    :class="{ 'product-card--last-item': product.count === 1 }"
    @mousemove="isShowButton = true"
    @mouseleave="isShowButton = false"
  >
    <img
      v-if="product.sale"
      class="product-card__flame"
      src="@/assets/images/flame.png"
      alt=""
    />
    <img class="product-card__image" src="@/assets/images/image7.png" alt="" />
    <StarRating
      class="product-card__rating"
      :rating="product.rating"
      active-color="#FADE56"
      inactive-color="#E7E7E7"
      :star-size="18"
      text-class="rating-text"
    />
    <p class="product-card__price">
      <span class="product-card__price-now"
        >{{ product.now_price }} &#8381;</span
      >
      <span class="product-card__price-old"
        >{{ product.old_price }} &#8381;
        <svg
          class="product-card__price-line"
          width="57"
          height="5"
          viewBox="0 0 57 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52.4397 0.598875C51.1936 0.485323 49.9475 0.401829 48.6993 0.304976C48.2882 0.271578 47.8771 0.271578 47.466 0.254879L44.7886 0.148006C44.2901 0.127968 43.7938 0.10125 43.2975 0.0878906C43.1548 0.0878906 43.01 0.0878906 42.8715 0.0878906H41.9002H37.4825C37.1332 0.0878906 36.7817 0.0878906 36.4324 0.107929L33.8209 0.171385C32.8411 0.191424 31.8613 0.201443 30.8836 0.23818L26.1293 0.415188C25.2134 0.451926 24.2953 0.471964 23.3794 0.52874L18.6401 0.82264C17.7753 0.876076 16.9126 0.919493 16.0499 0.996308L11.1487 1.41712C10.2754 1.49393 9.40204 1.55071 8.53085 1.6676L3.65303 2.33556L2.59866 2.47583C1.89574 2.56934 1.19496 2.71629 0.496302 2.83986L0.364239 2.86992C0.283543 2.90554 0.21014 2.97344 0.151234 3.06697C0.0569791 3.2114 0.00266984 3.40809 0 3.61469C0.000518241 3.82001 0.0525485 4.01676 0.144843 4.16241C0.190056 4.23666 0.244691 4.29523 0.305226 4.33435C0.365761 4.37347 0.430851 4.39226 0.496302 4.38951C1.34832 4.24256 2.1833 4.08226 3.03106 3.97204L5.3869 3.65811L7.95574 3.32413C8.3008 3.27737 8.64587 3.21726 8.99307 3.1872L12.9933 2.83318L15.4919 2.6161C15.8348 2.58938 16.1799 2.5493 16.5228 2.52926L20.4932 2.2888L22.9002 2.14519C23.1707 2.14519 23.4391 2.10845 23.7096 2.09843L27.9974 1.9448L30.3915 1.86131C30.677 1.86131 30.9603 1.83459 31.2436 1.83125L35.6719 1.7511C36.5921 1.7511 37.5102 1.72438 38.4304 1.72772H43.1165C43.4253 1.72772 43.7342 1.74776 44.043 1.76446L46.6481 1.90473L48.5928 1.9949C49.0508 2.01828 49.5109 2.07171 49.971 2.10845C51.3235 2.22534 52.674 2.34224 54.0181 2.47583C54.361 2.50922 54.7039 2.5493 55.049 2.58938C55.3941 2.62946 55.7839 2.66953 56.1502 2.73633C56.207 2.74969 56.2646 2.76639 56.3228 2.78643C56.4623 2.84122 56.6099 2.8114 56.736 2.70293C56.8266 2.61865 56.8995 2.49456 56.9456 2.346C56.9918 2.19745 57.0091 2.03096 56.9955 1.86712C56.9819 1.70328 56.938 1.54929 56.8691 1.4242C56.8003 1.2991 56.7096 1.20839 56.6082 1.1633C56.3597 1.06933 56.1069 1.00678 55.852 0.97627L55.3302 0.892775C54.9958 0.839339 54.6592 0.812621 54.3227 0.772544C53.6986 0.699069 53.0681 0.655652 52.4397 0.598875Z"
            fill="#E1452A"
          />
        </svg>
      </span>
    </p>

    <h3 class="product-card__title">
      {{ product.title }}
    </h3>

    <transition name="fade">
      <div class="product-card__button" v-if="isShowButton">
        <p class="product-card__count-product">
          <button type="button" class="product-card__count-dec"></button>
          <span class="product-card__count">1</span>
          <button class="product-card__count-inc"></button>
        </p>
        <button class="product-card__add-product" type="button">
          В корзину
        </button>
      </div>
    </transition>
  </article>
</template>

<script lang="ts" setup>
import StarRating from "vue-star-rating";
import { ref, defineProps, PropType } from "vue";
import { IProduct } from "@/types/types";

const isShowButton = ref(false);

const props = defineProps({
  product: {
    type: Object as PropType<IProduct>,
    required: true,
  },
});
</script>

<style lang="scss">
@import "./TheProduct";
.rating-text {
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  color: #333333;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
