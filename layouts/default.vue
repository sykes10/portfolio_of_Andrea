<template>
  <div class="bg-background h-screen">
    <app-header />
    <main class="container" role="main">
      <Nuxt />
    </main>
  </div>
</template>
<script>
import AppHeader from '~/components/header.vue'
export default {
  transition: 'home',
  name: 'DefaultLayout',
  components: {
    AppHeader,
  },
}
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
