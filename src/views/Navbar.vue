<template>
  <b-navbar :transparent="true">
    <template slot="brand">
      <b-navbar-item class="brand-logo" tag="router-link" :to="{ path: '/' }">
        Aliustaoglu Games
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" to="/">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/tools">
        Tools
      </b-navbar-item>
      <b-navbar-dropdown class="dropdown" label="Games">
        <b-navbar-item tag="router-link" to="/quizz-nite">
          Quizzz Nite
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
.navbar {
  background: -webkit-linear-gradient(#2981db, #044990);
}
.brand-logo {
  font-family: 'Games';
  font-size: 24px;
  background: -webkit-linear-gradient(#ffff00, #ff8000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.dropdown {
  color: red !important;
}
</style>
