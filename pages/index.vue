<template>
  <main class="mb-24">
    <section class="my-16 md:my-32 flex items-center">
      <img
        src="/images/main-image-1.png"
        alt="Andrea de armas ilustration"
        loading="lazy"
        class="w-100 h-120 object-cover mr-24"
      />
      <div class="space-y-5">
        <p class="text-6xl leading-tight font-young">
          UI/UX Designer<br />
          settled in London.
        </p>
        <p class="text-2xl font-normal font-karla">
          Pixels are being cleaned, layers are being named and<br />
          case studies are being written. Coming up soon :)
        </p>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api';
import PortfolioCase from '~/components/porfolio-case.vue';

export default defineComponent({
  components: { PortfolioCase },
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
