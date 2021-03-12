<template>
  <header class="container flex justify-between items-center py-2">
    <nuxt-link to="/" class="no-colour">
      <h1 class="font-medium text-2xl font-young leading-tight">
        Andrea<br />DN.
      </h1>
    </nuxt-link>
    <p class="font-karla uppercase font-bold">{{ date }}</p>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'app-header',
  setup() {
    const date = computed(() => {
      const fullDate = new Intl.DateTimeFormat('en-us', {
        dateStyle: 'full',
      }).format(new Date());
      const finalDate = fullDate.split(',');
      finalDate.pop();
      return finalDate.join(',');
    });

    return { date };
  },
});
</script>
