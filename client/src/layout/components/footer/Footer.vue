<template>
<div id="footer">
    <p class="footer-copyright">© 2022, Cyriac du Chatenet</p>
    <ul class="social-media-list">
        <li class="social-media"><a class="social-media-link" href="">a</a></li>
        <li class="social-media"><a class="social-media-link" href="">a</a></li>
        <li class="social-media"><a class="social-media-link" href="">a</a></li>
        <li class="social-media"><a class="social-media-link" href="">a</a></li>
        <li class="social-media"><a class="social-media-link" href="">a</a></li>
    </ul>
</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class FooterComponent extends Vue {}
</script>

<style lang="scss" scoped>
$primary-color : #2E77CB;

#footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    width: 96%;
    height: 8rem;
    background-color : $primary-color;
}

.footer-copyright {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
}

.social-media-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;
    list-style: none;
    color: #fff;
}

.social-media-link {
    text-decoration: none;
    color: #fff;
}
</style>
