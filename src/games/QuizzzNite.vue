<template>
  <div class="quizzz-nite">
    <section class="section">
      <div class="container">
        <div style="display: flex; ">
          <b-carousel :autoplay="true" icon-pack="fas" style="width: 300px">
            <b-carousel-item><img src="@/assets/screenshots/quizzz/quizzz-1.jpg"/></b-carousel-item>
            <b-carousel-item><img src="@/assets/screenshots/quizzz/quizzz-2.jpg"/></b-carousel-item>
            <b-carousel-item><img src="@/assets/screenshots/quizzz/quizzz-3.jpg"/></b-carousel-item>
            <b-carousel-item><img src="@/assets/screenshots/quizzz/quizzz-4.jpg"/></b-carousel-item>
            <b-carousel-item><img src="@/assets/screenshots/quizzz/quizzz-5.jpg"/></b-carousel-item>
            <b-carousel-item><img src="@/assets/screenshots/quizzz/quizzz-6.jpg"/></b-carousel-item>
          </b-carousel>
          <div class="info">
            <h1 class="title">Quizzz Nite</h1>
            <h2 class="subtitle">
              <p>
                Quizzz Nite is a fun to play Android/iOS trivia quiz app which contains over 4000 questions in 20+ different categories.
              </p>
              <div class="level">
                <div class="level-left">
                  <div>Questions are provided by</div>
                  <div style="background-color: #383B43; padding: 4px;">
                    <a href="https://opentdb.com/" target="_blank"
                      ><img class="img-opentdb" src="https://opentdb.com/images/logo-banner.png"
                    /></a>
                  </div>
                </div>
              </div>
              <div>It's a free app and it does not contain any ads. Download it now:</div>
              <div class="store-images">
                <img style="height: 58px" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
                <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" />
              </div>
            </h2>
            <div class="privacy">
              <router-link to="/quizzz-nite/privacy">Privacy Policy</router-link>
              <router-link to="/quizzz-nite/contact">Contact Form</router-link>
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
export default class QuizzzNite extends Vue {}
</script>

<style scoped lang="scss">
.quizzz-nite {
  padding: 8px;
  min-height: calc(100% - 52px);
  background: -webkit-linear-gradient(#0080ff, #80ffff);
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
