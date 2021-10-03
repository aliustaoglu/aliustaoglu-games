<template>
  <div class="quizzz-nite">
    <section class="section">
      <div class="container">
        <div style="display: flex; ">
          <div class="info">
            <h1 class="title">Jumpilla</h1>
            <div>
              <p>
                Jumpilla is a fun to play auto-runner available on Steam for Windows and macOS. Mobile version is also available for iOS and
                Android.
              </p>
              <br />
              <div style="width: 100%">
                <b-carousel :autoplay="true" icon-pack="fas" style="width: 800px">
                  <b-carousel-item><img src="@/assets/screenshots/jumpilla/jumpilla-1.jpg"/></b-carousel-item>
                  <b-carousel-item><img src="@/assets/screenshots/jumpilla/jumpilla-2.jpg"/></b-carousel-item>
                  <b-carousel-item><img src="@/assets/screenshots/jumpilla/jumpilla-3.jpg"/></b-carousel-item>
                  <b-carousel-item><img src="@/assets/screenshots/jumpilla/jumpilla-4.jpg"/></b-carousel-item>
                  <b-carousel-item><img src="@/assets/screenshots/jumpilla/jumpilla-5.jpg"/></b-carousel-item>
                  <b-carousel-item><img src="@/assets/screenshots/jumpilla/jumpilla-6.jpg"/></b-carousel-item>
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
              <router-link to="/jumpilla/privacy">Privacy Policy</router-link>
              <router-link to="/jumpilla/contact">Contact Form</router-link>
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
    window.open('https://play.google.com/store/apps/details?id=biz.aliustaoglu.games.pianoshooter', '_blank');
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
