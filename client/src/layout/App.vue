<template>
  <main>
    <header>
      <NavbarMobileComponent v-if="isMobile" />
      <NavbarDesktopComponent v-if="isDesktop" />
    </header>
    <router-view />
    <FooterComponent />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FooterComponent from './components/footer/Footer.vue';
import NavbarMobileComponent from './components/navbar/mobile/NavbarMobile.vue';
import NavbarDesktopComponent from './components/navbar/desktop/NavbarDesktop.vue';

@Options({
  components: {
    NavbarMobileComponent,
    NavbarDesktopComponent,
    FooterComponent,
  },
})
export default class App extends Vue {
  // eslint-disable-next-line no-undef
  window!: Window & typeof globalThis;

  isMobile = false;

  isDesktop = false;

  windowWidth = window.innerWidth;

  getClientSize() {
    if (this.windowWidth <= 999) {
      this.isMobile = true;
    } else {
      this.isDesktop = true;
    }
  }

  mounted() {
    this.getClientSize();
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

body {
  width: 100vw;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
