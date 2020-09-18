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
