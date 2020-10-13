<template>
  <div id="app">
    <navbar />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Body from '@/views/Body.vue';
import Navbar from '@/views/Navbar.vue';

@Component({
  components: { Body, Navbar }
})
export default class App extends Vue {}
</script>
<style lang="scss">
@font-face {
  font-family: 'Games';
  src: url(./assets/fonts/Games.ttf);
}
</style>
