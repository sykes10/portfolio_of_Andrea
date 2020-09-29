<template>
  <section>This is ticket tailor</section>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api';

export default defineComponent({
  head: {},
  setup() {
    useMeta({
      title: 'AndreaDA. | Atriom',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is aatriom',
        },
      ],
    });
    return {};
  },
});
</script>
