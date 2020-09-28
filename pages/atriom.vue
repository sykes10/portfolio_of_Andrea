<template>
  <section>This is ticket tailor</section>
</template>

<script lang="ts">
import { NuxtOptionsHead } from '@nuxt/types/config/head';

export default {
  head(): NuxtOptionsHead {
    return {
      title: 'AndreaDA. | Atriom',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is aatriom',
        },
      ],
    };
  },
};
</script>
