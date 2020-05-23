<template>
  <div>
    <h1 class="text-4xl text-center mt-40 text-shadow-4">
      {{ home.title }}
    </h1>
    <div class="flex justify-center mt-20">
      <span
        class="border-black border-b-2 border-r-2 h-20 w-20"
        style="transform: translateY(-25%) rotate(45deg);"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  async asyncData({ $content }) {
    const home = await $content('home').fetch();

    return {
      home,
    };
  },
})
export default class Index extends Vue {}
</script>

<style>
.text-shadow-4 {
  color: pink;
  animation: glow 15s ease-in-out infinite;
}

@keyframes glow {
  25% {
    color: teal;
  }
  45% {
    color: purple;
  }
  75% {
    color: cyan;
  }
  100% {
    color: pink;
  }
}
</style>
