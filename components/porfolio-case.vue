<template>
  <article class="flex flex-col items-center">
    <nuxt-link :to="portfolioCase.to">
      <img :src="portfolioCase.image" alt="" class="mb-6" />
      <h2 class="text-4xl leading-tight mb-2">{{ portfolioCase.title }}</h2>
      <h3 class="font-rubik text-secondary font-normal">
        {{ portfolioCase.type }}
      </h3>
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'portfolio-case',
  props: {
    portfolioCase: {
      type: Object,
      required: true,
    },
  },
});
</script>
