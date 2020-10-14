<template>
  <footer>
    &#169; 2020 Cüneyt Aliustaoğlu
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
footer{
  background: $background-colour;
  color: $secondary;
  font-weight: 600;
  font-size: 12px;
}
</style>
