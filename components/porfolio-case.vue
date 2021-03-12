<template>
  <article class="w-full mb-10 md:mb-0 px-4 md:px-0">
    <nuxt-link :to="portfolioCase.to">
      <img
        loading="lazy"
        :src="portfolioCase.image"
        :alt="portfolioCase.alt"
        class="mb-6 object-cover mx-auto"
      />
      <h2 class="text-2xl md:text-5xl leading-tight mb-2">
        {{ portfolioCase.title }}
      </h2>
      <h3 class="font-karla text-secondary font-normal uppercase">
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
