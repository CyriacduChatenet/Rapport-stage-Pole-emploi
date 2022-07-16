<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class MobileNavbarComponent extends Vue {}
</script>

<style>

</style>
