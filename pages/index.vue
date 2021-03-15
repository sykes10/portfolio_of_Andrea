<template>
  <main class="md:mb-24">
    <section
      class="my-4 md:my-32 flex flex-col md:flex-row flex-wrap justify-center items-center"
    >
      <img
        src="/images/main-image-1.png"
        alt="Andrea de armas ilustration"
        loading="lazy"
        class="w-3/5 md:w-100 h-full md:h-120 object-cover md:gap-24"
      />
      <div class="space-y-5 mt-10 md:mt-0">
        <p class="md:text-6xl text-5xl leading-tight font-young">
          UI/UX Designer settled in London.
        </p>
        <p class="md:text-2xl text-base font-normal font-karla">
          Pixels are being cleaned, layers are being named and case studies are
          being written. Coming up soon :)
        </p>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api';

export default defineComponent({
  head: {},
  setup() {
    useMeta({
      title: 'AndreaDA. | Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is a portfolio',
        },
      ],
    });
    return {};
  },
});
</script>
