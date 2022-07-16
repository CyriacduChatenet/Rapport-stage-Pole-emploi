<template>
  <main>
    <DesktopNavbarComponent />
    <MobileNavbarComponent />
    <router-view />
    <FooterComponent />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MobileNavbarComponent from './components/navbar/mobile/MobileNavbar.vue';
import DesktopNavbarComponent from './components/navbar/desktop/DesktopNavbar.vue';
import FooterComponent from './components/footer/Footer.vue';

@Options({
  components: {
    MobileNavbarComponent,
    DesktopNavbarComponent,
    FooterComponent,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
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
