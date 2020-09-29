<template>
  <section>This is ticket tailor</section>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api';

export default defineComponent({
  head: {},
  setup() {
    useMeta({
      title: 'AndreaDA. | Small business',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is small bussiness',
        },
      ],
    });
  },
});
</script>
