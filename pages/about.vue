<template>
  <section>This is the about section</section>
</template>

<script lang="ts">
import { NuxtOptionsHead } from '@nuxt/types/config/head';

export default {
  head(): NuxtOptionsHead {
    return {
      title: 'AndreaDA. | About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'this is the about page',
        },
      ],
    };
  },
};
</script>
