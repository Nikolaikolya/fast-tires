<template>
  <section class="popular-producer">
    <Container>
      <h2 class="popular-producer__title">Популярные производители</h2>
      <ul class="popular-producer-list">
        <li
          class="popular-producer-list__item"
          v-for="(image, index) in imageList"
          :key="index"
        >
          <a href="" class="popular-producer-list__link">
            <div>
              <img
                :src="require('@/assets/images/build/' + image.imageName)"
                alt=""
                class="popular-producer-list__image"
              />
            </div>
          </a>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script lang="ts" setup>
import Container from "../Container/index.vue";
const images = "producer-1.png";

const imageList = [
  {
    imageName: "producer-1.png",
  },
  {
    imageName: "producer-2.png",
  },
  {
    imageName: "producer-3.png",
  },
  {
    imageName: "producer-1.png",
  },
  {
    imageName: "producer-2.png",
  },
  {
    imageName: "producer-3.png",
  },
  {
    imageName: "producer-1.png",
  },
  {
    imageName: "producer-2.png",
  },
  {
    imageName: "producer-3.png",
  },
  {
    imageName: "producer-1.png",
  },
  {
    imageName: "producer-2.png",
  },
  {
    imageName: "producer-3.png",
  },
  {
    imageName: "producer-1.png",
  },
  {
    imageName: "producer-2.png",
  },
  {
    imageName: "producer-3.png",
  },
  {
    imageName: "producer-1.png",
  },
  {
    imageName: "producer-2.png",
  },
  {
    imageName: "producer-3.png",
  },
];
</script>

<style lang="scss">
@import "./PopularProducer";
</style>
