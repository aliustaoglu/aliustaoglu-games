<template>
  <div class="contact">
    <div class="contact-form">
      <form data-focus="false" target="_blank" action="https://formsubmit.co/aliustaoglu@protonmail.com" method="POST">
        <b-field label="Name">
          <b-input v-model="name"></b-input>
        </b-field>
        <b-field label="Subject">
          <b-input v-model="subject" readonly></b-input>
        </b-field>
        <b-field label="Email">
          <b-input v-model="email" type="email"></b-input>
        </b-field>
        <b-field label="Message">
          <b-input maxlength="2000" type="textarea" v-model="message"></b-input>
        </b-field>
        <b-button :disabled="!enabled" tag="input" native-type="submit" value="Send">Send</b-button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {
  name = '';
  email = '';
  subject = 'Quizzz Nite';
  message = '';

  get enabled() {
    const e = this.name.length * this.email.length * this.message.length;
    console.log(e);
    return e;
  }
}
</script>

<style scoped lang="scss">
.contact {
  width: 100%;
  display: flex;
  justify-content: center;
}
.contact-form {
  width: 500px;
}
</style>
