<template>
  <div class="container">
    <AppHeader />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AppHeader from '@/components/Header.vue';

@Component({
  components: { AppHeader },
})
export default class DefaultLayout extends Vue {}
</script>
