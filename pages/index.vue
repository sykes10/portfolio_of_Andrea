<template>
  <article>
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
  </article>
</template>

<script lang="ts">
export default {
  async asyncData({ $content }) {
    const page = await $content('index').fetch()

    return {
      page,
    }
  },
}
</script>
