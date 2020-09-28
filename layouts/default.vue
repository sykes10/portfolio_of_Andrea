<template>
  <div class="bg-background h-auto min-h-screen font-young">
    <app-header />
    <Nuxt class="container" />
    <app-footer />
  </div>
</template>
<script>
import AppHeader from '~/components/header.vue';
import AppFooter from '~/components/footer.vue';

export default {
  transition: 'home',
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
