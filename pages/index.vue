<template>
  <div class="layout">
    <div class="container xl mx-auto px-40">
      <h1 class="text-5xl">
        I’m a Junior UX/UI designer based in London, starting on the path of UX
        and UI Design.
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Index extends Vue {}
</script>

<style>
.layout {
  background-color: theme('colors.main');
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
