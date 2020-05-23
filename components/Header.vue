<template>
  <nav class="py-5">
    <h1 href="/" target="_self" class="text-3xl font-pt flex">
      <span v-for="(letter, ind) of title" :key="ind" :style="letter.delay">{{
        letter.letter
      }}</span>
    </h1>
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
h1 span {
  color: #581845;
}
h1 span:nth-child(2n) {
  color: #ff5733;
}
h1 span {
  animation: move-text 0.75s forwards;
}
h1 span {
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
