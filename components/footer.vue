<template>
  <footer
    class="container flex flex-col justify-between items-center py-2 pb-12"
  >
    <img
      src="/images/icon-footer.png"
      alt="icon footer"
      class="w-12 mb-5"
      loading="lazy"
    />
    <ul class="flex space-x-10 mb-8">
      <li>
        <a
          class="uppercase underline"
          href="mailto:alex.arevalo.dev@email.com"
          rel="noopener"
          noreferrer
          target="_blank"
        >
          Email
        </a>
      </li>
      <li>
        <a
          class="uppercase underline"
          href="https://www.linkedin.com/in/andrea-alejandra-de-armas-nu%C3%B1ez-200200ba/"
          rel="noopener"
          noreferrer
          target="_blank"
        >
          Linkedin
        </a>
      </li>
    </ul>
    <small class="uppercase text-gray-800 text-base"
      >© 2020 Andrea De Armas</small
    >
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
