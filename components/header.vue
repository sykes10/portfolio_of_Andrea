<template>
  <header class="container flex justify-between items-center py-2">
    <nuxt-link to="/" class="no-colour">
      <h1 class="font-medium text-2xl font-young leading-tight">
        Andrea<br />DN.
      </h1>
    </nuxt-link>
    <nav>
      <ul class="flex space-x-8">
        <li v-for="link in links" :key="link.to">
          <nuxt-link :to="link.to" class="underline-transition uppercase">{{
            link.text
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'app-header',
  setup() {
    const links = reactive([
      {
        to: '/',
        text: 'HOME',
      },
      {
        to: '/about',
        text: 'ABOUT',
      },
    ]);

    return { links };
  },
});
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply font-medium;
  @apply text-green-700;
}
.nuxt-link-exact-active.no-colour {
  @apply text-current;
}
</style>
