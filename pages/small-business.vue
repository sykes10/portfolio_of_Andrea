<template>
  <section>This is ticket tailor</section>
</template>

<script lang="ts">
import { NuxtOptionsHead } from '@nuxt/types/config/head';

export default {
  head(): NuxtOptionsHead {
    return {
      title: 'AndreaDA. | Small business',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is small bussiness',
        },
      ],
    };
  },
};
</script>
