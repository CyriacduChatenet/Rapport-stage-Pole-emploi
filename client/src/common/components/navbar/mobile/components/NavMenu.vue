<template>
  <ul id="nav-menu">
    <li class="nav-menu-entrie">
      <router-link to="/">Home</router-link>
    </li>
    <li class="nav-menu-entrie">
      <router-link to="/about">About</router-link>
    </li>
    <li class="nav-menu-entrie">
      <router-link to="/contact">Contact</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
@media all and (min-width: 1000px) {
  #nav-menu {
    display: none;
  }
}

#nav-menu {
  position: fixed;
  z-index: 2;
}
</style>
