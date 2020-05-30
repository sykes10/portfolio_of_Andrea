<template>
  <div>
    <div class="text-center">
      <h1 class="text-5xl mt-lg">
        {{ home.title }}
      </h1>
      <h2 class="text-5xl">
        {{ home.subTitle }}
      </h2>
      <nuxt-link to="/about" class="block mt-6">READ MORE</nuxt-link>
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
