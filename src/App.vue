<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
    <app-footer class="app-footer" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Body from '@/views/Body.vue';
import Navbar from '@/views/Navbar.vue';
import AppFooter from '@/views/AppFooter.vue';

@Component({
  components: { Body, Navbar, AppFooter }
})
export default class App extends Vue {}
</script>
<style lang="scss">
@font-face {
  font-family: 'Games';
  src: url(./assets/fonts/Games.ttf);
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  //background-color: $secondary;
}
</style>
<style scoped lang="scss">
.app-footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 4px;
}
#app {
  height: 100%;
}
</style>
