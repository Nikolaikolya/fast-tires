<template>
  <section class="popular-producer">
    <Container>
      <h2 class="popular-producer__title">Популярные производители</h2>
      <ul class="popular-producer-list">
        <li
          class="popular-producer-list__item"
          v-for="(image, index) in producersImages"
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
import { producersImages } from "@/data/producersImages";
</script>

<style lang="scss">
@import "./PopularProducer";
</style>
