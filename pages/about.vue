<template>
  <section>This is the about section</section>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api';

export default defineComponent({
  head: {},
  setup() {
    useMeta({
      title: 'AndreaDA. | About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'this is the about page',
        },
      ],
    });
    return {};
  },
});
</script>
