<template>
  <main class="lg:mb-24 mb-6">
    <section
      class="my-4 lg:my-32 flex flex-col lg:flex-row flex-wrap lg:flex-no-wrap justify-center items-center lg:gap-24 md:gap-12"
    >
      <img
        src="/images/main-image-1.png"
        alt="Andrea de armas ilustration"
        loading="lazy"
        class="w-3/5 md:w-100 h-full md:h-120 object-cover"
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
