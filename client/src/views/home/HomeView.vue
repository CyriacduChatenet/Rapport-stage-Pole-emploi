<template>
  <div class="home">
    <div class="herobanner">
      <h1 class="herobanner-title">Pole emploi</h1>
      <button class="herobanner-button">Voir les articles</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "homeComponent",
  component: {},
});
</script>

<style lang="scss">
.herobanner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12rem 0;
  width: 100%;
  height: 16rem;
  background-color: rgb(127, 147, 218);
}

.herobanner-button {
  padding: 1rem 2rem;
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  font-size: 20px;
}
</style>
