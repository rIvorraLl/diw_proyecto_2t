<script setup>
import FooterComponent from "../components/FooterComponent.vue";
import HeaderNav from "../components/HeaderNav.vue";
// import LandingPage from "./LandingPage.vue";
</script>
<template>
  <HeaderNav></HeaderNav>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>
