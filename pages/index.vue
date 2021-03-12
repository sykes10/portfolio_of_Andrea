<template>
  <main class="mb-24">
    <section
      class="my-16 md:my-32 flex flex-col items-center space-y-8 mb-30 md:mb-64"
    >
      <img
        src="/images/homepage/header.png"
        alt="Andrea de armas ilustration"
        loading="lazy"
        class="w-1/2 md:w-64 object-cover"
      />
      <p class="text-3xl md:text-6xl leading-tight font-young text-center">
        I’m Andrea De Armas, a UX/UI<br />
        Designer based in London.
      </p>
      <nuxt-link
        to="/about"
        class="text-secondary underline-transition font-karla"
      >
        MORE ABOUT
      </nuxt-link>
    </section>
    <section>
      <div
        class="flex flex-col md:flex-row justify-between items-center md:mb-20"
      >
        <portfolio-case
          :portfolio-case="{
            image: '/images/homepage/ticket-tailor.png',
            title: 'New identity for a group of dreamers',
            type: 'UX/UI DESIGN',
            to: '/ticket-tailor',
            alt: 'ticket tailor portfolio case',
          }"
          class="md:w-2/5"
        />
        <portfolio-case
          :portfolio-case="{
            image: '/images/homepage/email-octopus.png',
            title: 'Re-branding a trusted Email platform',
            type: 'Branding - UX/UI Design',
            to: '/email-octopus',
            alt: 'email octopus portfolio case',
          }"
          class="md:w-2/5"
        />
      </div>
      <div
        class="flex flex-col md:flex-row justify-between items-center md:mb-20"
      >
        <portfolio-case
          :portfolio-case="{
            image: '/images/homepage/atriom.png',
            title: 'A startup looking for a clean and safe look',
            type: 'UX/UI DESIGN',
            to: '/atriom',
            alt: 'atriom portfolio case',
          }"
          class="md:w-1/2"
        />
        <portfolio-case
          :portfolio-case="{
            image: '/images/homepage/football-app.png',
            title: 'Making an app for the ultimate fan',
            type: 'Branding - Illustration - UX/UI Design',
            to: '/football-app',
            alt: 'football app portfolio case',
          }"
          class="md:w-1/3"
        />
      </div>
      <portfolio-case
        :portfolio-case="{
          image: '/images/homepage/small-business.png',
          title: 'Giving a hand to the small business',
          type: 'UX/UI DESIGN',
          to: '/small-business',
          alt: 'small bussiness portfolio case',
        }"
        class="md:w-1/3 mx-auto"
      />
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
