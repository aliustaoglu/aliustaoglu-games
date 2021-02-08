<template>
  <div class="quizzz-nite">
    <section class="section">
      <div class="container">
        <div style="display: flex; ">
          <div class="info">
            <h1 class="title">Piano Shooter</h1>
            <div>
              <p>
                Sight-reading is crucial for your musical journey especially if you're piano/keyboard player. But it could be a boring task
                to master.
              </p>
              <br />
              <p>
                What if you could have some fun by learning? Most importantly by carrying this little game in your pocket, you can turn your
                wasted time into efficient learning time when you're waiting for your bus, plane, friend, partner etc. It requires no
                internet so when you're on the plane or bus you can still keep learning.
              </p>
              <div style="width: 100%">
                <b-carousel :autoplay="true" icon-pack="fas" style="width: 800px">
                  <b-carousel-item><img src="@/assets/screenshots/piano/piano-1.png"/></b-carousel-item>
                  <b-carousel-item><img src="@/assets/screenshots/piano/piano-2.png"/></b-carousel-item>
                  <b-carousel-item><img src="@/assets/screenshots/piano/piano-3.png"/></b-carousel-item>
                  <b-carousel-item><img src="@/assets/screenshots/piano/piano-4.png"/></b-carousel-item>
                </b-carousel>
              </div>
              <div>It's a free app and it does not contain any ads. Download it now:</div>
              <div class="store-images">
                <img style="height: 58px" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
                <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" />
              </div>
            </div>
            <div class="privacy">
              <router-link to="/piano/privacy">Privacy Policy</router-link>
              <router-link to="/piano/contact">Contact Form</router-link>
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
