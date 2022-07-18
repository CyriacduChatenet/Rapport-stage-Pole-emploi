<template>
<nav id="nav-mobile">
    <a href="" class="nav-mobile-link-app-name">Stage Pole emploi</a>
    <button class="nav-mobile-menu-button">M</button>
</nav>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class NavbarMobileComponent extends Vue {}
</script>

<style lang="scss">
    #nav-mobile {
        position: fixed;
        z-index: 2;
        padding: 0 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        height: 5rem;
        background-color: white;
    }
    .nav-mobile-link-app-name {
        text-decoration: none;
    }
    .nav-mobile-menu-button {
        border: none;
        background-color: transparent;
    }
</style>
