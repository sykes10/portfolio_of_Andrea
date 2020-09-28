<template>
  <main>
    <section class="my-32 flex flex-col items-center space-y-8">
      <img
        src="/images/homepage/header.png"
        alt="Andrea de armas ilustration"
        loading="lazy"
        class="w-64"
      />
      <p class="text-6xl leading-tight font-young text-center">
        I’m Andrea De Armas, a UX/UI<br />
        Designer based in London.
      </p>
      <nuxt-link to="/about" class="text-secondary underline-transition"
        >MORE ABOUT</nuxt-link
      >
    </section>
    <section>
      <div class="flex justify-between items-center mb-20">
        <portfolio-case
          :portfolio-case="{
            image: '/images/homepage/ticket-tailor.png',
            title: 'New identity for a group of dreamers',
            type: 'UX/UI DESIGN',
            to: '/ticket-tailor',
          }"
          class="w-2/5"
        />
        <portfolio-case
          :portfolio-case="{
            image: '/images/homepage/email-octopus.png',
            title: 'Re-branding a trusted Email platform',
            type: 'Branding - UX/UI Design',
            to: '/email-octopus',
          }"
          class="w-2/5"
        />
      </div>
      <div class="flex justify-between items-center mb-20">
        <portfolio-case
          :portfolio-case="{
            image: '/images/homepage/atriom.png',
            title: 'A startup looking for a clean and safe look',
            type: 'UX/UI DESIGN',
            to: '/atriom',
          }"
          class="w-1/2"
        />
        <portfolio-case
          :portfolio-case="{
            image: '/images/homepage/football-app.png',
            title: 'Making an app for the ultimate fan',
            type: 'Branding - Illustration - UX/UI Design',
            to: '/football-app',
          }"
          class="w-1/3"
        />
      </div>
      <portfolio-case
        :portfolio-case="{
          image: '/images/homepage/small-business.png',
          title: 'Giving a hand to the small business',
          type: 'UX/UI DESIGN',
          to: '/small-business',
        }"
        class="w-1/3 mx-auto"
      />
    </section>
  </main>
</template>

<script lang="ts">
import PortfolioCase from '~/components/porfolio-case.vue';

export default {
  components: { PortfolioCase },
  head() {
    return {
      title: 'AndreaDA. | Portfolio',
    };
  },
};
</script>
