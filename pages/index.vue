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
      <nuxt-link to="/about" class="text-secondary underline-wiggle font-rubik">
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
          }"
          class="md:w-2/5"
        />
        <portfolio-case
          :portfolio-case="{
            image: '/images/homepage/email-octopus.png',
            title: 'Re-branding a trusted Email platform',
            type: 'Branding - UX/UI Design',
            to: '/email-octopus',
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
          }"
          class="md:w-1/2"
        />
        <portfolio-case
          :portfolio-case="{
            image: '/images/homepage/football-app.png',
            title: 'Making an app for the ultimate fan',
            type: 'Branding - Illustration - UX/UI Design',
            to: '/football-app',
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
        }"
        class="md:w-1/3 mx-auto"
      />
    </section>
  </main>
</template>

<script lang="ts">
import { NuxtOptionsHead } from '@nuxt/types/config/head';
import PortfolioCase from '~/components/porfolio-case.vue';

export default {
  components: { PortfolioCase },
  head(): NuxtOptionsHead {
    return {
      title: 'AndreaDA. | Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is a portfolio',
        },
      ],
    };
  },
};
</script>
<style scoped>
.underline-wiggle:hover {
  background: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .5s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23D99079' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
  background-position: 0 100%;
  background-size: auto 4px;
  background-repeat: repeat-x;
  text-decoration: none;
  transition: all;
}
</style>
