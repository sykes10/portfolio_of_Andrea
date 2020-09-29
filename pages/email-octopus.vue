<template>
  <section>This is ticket tailor</section>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api';

export default defineComponent({
  head: {},
  setup() {
    useMeta({
      title: 'AndreaDA. | Emailoctopus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is emailoctopus',
        },
      ],
    });
    return {};
  },
});
</script>
