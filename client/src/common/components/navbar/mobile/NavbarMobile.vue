<template>
  <div>
    <nav id="nav-mobile">
      <p>Stage Pole emploi</p>
      <button @click="handleMenu()" class="nav-menu-button">menu</button>
    </nav>
    <nav-menu v-if="menuState === true" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import NavMenu from "./components/NavMenu.vue";

export default defineComponent({
  setup() {
    const state = reactive({
      menuState: false,
    });
    return { ...toRefs(state) };
  },
  components: { NavMenu },
  methods: {
    handleMenu() {
      this.menuState === false
        ? (this.menuState = true)
        : (this.menuState = false);
    },
  },
});
</script>

<style lang="scss">
@media all and (max-width: 999px) {
  #nav-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 5rem;
    padding: 0 2rem;
    background-color: #fff;
  }
  .nav-menu-button {
    background-color: transparent;
    border: none;
  }
}

@media all and (min-width: 1000px) {
  #nav-mobile {
    display: none;
  }
}
</style>
