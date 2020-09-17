<template>
  <header class="container flex justify-between items-center">
    <h1>AndreaDA.</h1>
    <nav>
      <ul class="flex space-x-4">
        <li>
          <nuxt-link to="/">HOME</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">ABOUT</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'header',
})
</script>
