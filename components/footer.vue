<template>
  <footer class="container flex justify-between items-center py-2">
    <a href="/">
      <h1 class="font-medium text-2xl font-rubik">AndreaDN.</h1>
    </a>
    <nav>
      <ul class="flex space-x-4">
        <li v-for="link in links" :key="link.to">
          <nuxt-link :to="link.to" class="underline-transition uppercase">{{
            link.text
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
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
.underline-transition {
  @apply inline-block;
}
.underline-transition::after {
  content: '';
  @apply w-0;
  height: 2px;
  @apply block;
  @apply bg-black;
  @apply duration-300;
}
.underline-transition:hover::after {
  @apply w-full;
}
.nuxt-link-exact-active {
  @apply font-medium;
  @apply text-green-700;
}
</style>
