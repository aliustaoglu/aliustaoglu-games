<template>
    <div class="quizzz-nite">
      <section class="section">
        <div class="container">
          <div style="display: flex; ">
            <div class="info">
              <h1 class="title">Convergists</h1>
              <div>
                <p>Convergists is a single-tap game where you need to converge everything carefully. Things can get tricky when there are more and more items on the board. You need to avoid obstacles and match the items that need converging.</p>
                <p>Convergists may not classify as a puzzle game but I'm sure it will attract all puzzle lovers out there. There are times when you will need to decide your next move like a chess player.</p>
                <p>Good luck!</p>
                <br />
                <div style="width: 100%">
                  <b-carousel :autoplay="true" icon-pack="fas" style="width: 800px">
                    <b-carousel-item><img src="@/assets/screenshots/convergists/convergists1.png"/></b-carousel-item>
                    <b-carousel-item><img src="@/assets/screenshots/convergists/convergists2.png"/></b-carousel-item>
                    <b-carousel-item><img src="@/assets/screenshots/convergists/convergists3.png"/></b-carousel-item>
                    <b-carousel-item><img src="@/assets/screenshots/convergists/convergists4.png"/></b-carousel-item>
                    <b-carousel-item><img src="@/assets/screenshots/convergists/convergists5.png"/></b-carousel-item>
                    <b-carousel-item><img src="@/assets/screenshots/convergists/convergists6.png"/></b-carousel-item>
                    <b-carousel-item><img src="@/assets/screenshots/convergists/convergists7.png"/></b-carousel-item>
                    <b-carousel-item><img src="@/assets/screenshots/convergists/convergists8.png"/></b-carousel-item>
                  </b-carousel>
                </div>
                <!-- <div>It's a free app and it does not contain any ads. Download it now:</div> -->
                <!-- <div class="store-images">
                  <img
                    @click="clickAndroid"
                    style="height: 58px;"
                    class="link"
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  />
                  <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" />
                </div> -->
              </div>
              <div class="privacy">
                <router-link to="/convergists/privacy">Privacy Policy</router-link>
                <router-link to="/convergists/contact">Contact Form</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  
  @Component
  export default class QuizzzNite extends Vue {
    clickAndroid() {
      window.open('https://play.google.com/store/apps/details?id=games.usta.convergists', '_blank');
    }
  }
  </script>
  
  <style scoped lang="scss">
  .quizzz-nite {
    padding: 8px;
    min-height: calc(100% - 52px);
    background: -webkit-linear-gradient(#0080ff, #80ffff);
  }
  .link {
    cursor: pointer;
  }
  .open {
    color: #f36e0b;
    font-weight: 600;
  }
  .trivia {
    color: #fff;
    background-color: #383b43;
  }
  .img-opentdb {
    height: 20px;
  }
  .info {
    margin-left: 16px;
  }
  .store-images {
    display: flex;
    align-self: center;
  }
  .privacy {
    width: 250px;
    display: flex;
    justify-content: space-between;
  }
  </style>
  