<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <Container>
        <div class="wrapper-menu-footer">
          <FooterList title="Каталог" :menu-list="catalogDataView" />
          <FooterList title="О магазине" :menu-list="informationDataView" />
          <FooterList
            class="footer-catalog--contact"
            title="Контакты"
            :menu-list="contactDataView"
          />
          <div class="footer-information-wrapper">
            <ul class="footer-information">
              <li class="footer-information__item">
                <a href="#" class="footer-information__link"
                  >Политика конфидециальности</a
                >
              </li>
              <li class="footer-information__item">
                <a href="#" class="footer-information__link">Договор оферты</a>
              </li>
              <li class="footer-information__item">
                <a href="#" class="footer-information__link">Карта сайта</a>
              </li>
              <li class="footer-information__item">
                <a href="#" class="footer-information__link"
                  >DATSKY - создание и продвижение сайтов</a
                >
              </li>
            </ul>
            <img src="@/assets/images/payments.png" alt="" />
          </div>
        </div>
      </Container>
    </div>
    <div class="footer-wrapper">
      <Container>
        <p class="footer-text">
          Обращаем ваше внимание на то, что данный сайт носит исключительно
          информационный характер и ни при каких условиях не является публичной
          офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса
          Российской Федерации. Наличие товара и его стоимость может отличаться
          от заявленной на данном сайте. Указанное выше наличие в нашем
          интернет-магазине является ориентировочным и не учитывает бронирование
          товара при оплате по безналичному расчету, а также продажи, которые
          произошли с момента последнего обновления данных. Вы можете оставить
          заявку на резерв товара оформив заказ на сайте. Бронирование товара
          осуществляется после подтверждения заказа менеджером.
        </p>
      </Container>
    </div>
    <div class="footer-copyrait">
      <Container>
        <p class="footer-copyrait__text">2016-2021 © "Шины мигом"</p>
      </Container>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import Container from "../Container/index.vue";
import FooterList from "./FooterList.vue";

import {
  informationDataView,
  catalogDataView,
  contactDataView,
} from "@/data/tempView";
</script>

<style lang="scss">
@import "./style";
</style>
