<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <footer id="footer">
    <p class="footer-copyright">© 2022, Cyriac du Chatenet</p>
    <ul class="social-media-list">
      <a><font-awesome-icons icon="faHatWizard"/></a>
      <a>a</a>
      <a>a</a>
      <a>a</a>
      <a>a</a>
    </ul>
  </footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class FooterComponent extends Vue {}
</script>

<style lang="scss" scoped>
$primary-color: #2e77cb;

@media all and (max-width: 999px) {
  #footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 2rem;
    width: 84%;
    height: 12rem;
    background-color: $primary-color;
  }
  .social-media-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    list-style: none;
    color: #fff;
  }
}

@media all and (min-width: 1000) {
  #footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    width: 84%;
    height: 8rem;
    background-color: $primary-color;
  }
  .social-media-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;
    list-style: none;
    color: #fff;
  }
}

.footer-copyright {
  color: #fff;
  font-weight: 500;
  font-size: 18px;
}

.social-media-link {
  text-decoration: none;
  color: #fff;
}
</style>
