<template>
  <div class="bg-background h-auto min-h-full font-rubik">
    <app-header />
    <Nuxt class="container" />
  </div>
</template>
<script>
import AppHeader from '~/components/header.vue';
export default {
  transition: 'home',
  name: 'DefaultLayout',
  components: {
    AppHeader,
  },
};
</script>
