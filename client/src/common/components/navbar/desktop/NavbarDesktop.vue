<template>
  <nav id="nav-desktop">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
@media all and (max-width: 999px) {
  #nav-desktop {
    display: none;
  }
}

@media all and (min-width: 1000px) {
  #nav-desktop {
    width: 90%;
    padding: 2rem;
  }
}
</style>
