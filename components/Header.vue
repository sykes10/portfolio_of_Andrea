<template>
  <nav class="py-5 flex justify-between items-center">
    <h1 href="/" target="_self" class="text-3xl font-pt flex">
      <span
        v-for="(letter, ind) of title"
        :key="ind"
        :style="letter.delay"
        class="letter text-secondary relative"
        >{{ letter.letter }}</span
      >
    </h1>
    <nuxt-link to="/about">About</nuxt-link>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {
  get title() {
    return 'AndreaDN.'.split('').map(function (char, index) {
      return {
        letter: char,
        delay: `animation-delay: ${0.5 + index / 10}s`,
      };
    });
  }
}
</script>

<style lang="scss">
.letter {
  position: relative;
  opacity: 0;
  animation: move-text 0.75s forwards;
}

@keyframes move-text {
  0% {
    bottom: -0.2em;
    opacity: 1;
  }
  50% {
    bottom: 0.2em;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}
</style>
