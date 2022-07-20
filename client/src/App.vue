<template>
  <NavbarDesktop />
  <NavbarMobile />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavbarDesktop from "./common/components/navbar/desktop/NavbarDesktop.vue";
import NavbarMobile from "./common/components/navbar/mobile/NavbarMobile.vue";

export default defineComponent({
  components: { NavbarDesktop, NavbarMobile },
});
</script>

<style lang="scss"></style>
