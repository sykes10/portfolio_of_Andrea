<template>
  <section>This is ticket tailor</section>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api';

export default defineComponent({
  head: {},
  setup() {
    useMeta({
      title: 'AndreaDA. | Football app',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is football app',
        },
      ],
    });
  },
});
</script>
