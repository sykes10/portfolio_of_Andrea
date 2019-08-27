<template>
  <nav class="flex items-center justify-between flex-wrap px-40 py-8" :class="bgColor">
    <div class="flex flex-col mr-6" :class="mainTextColor">
      <a href="/" target="_self" class="text-3xl tracking-wide leading-none font-pt">Andrea D.N.</a>
      <span class="text-sm tracking-wide font-rubik" :class="secondaryTextColor">Junior UX UI Designer</span>
    </div>
    <div class="w-full block flex lg:items-center lg:w-auto">
      <div class="lg:flex-grow">
        <nuxt-link
          to="/"
          href="#responsive-header"
          class="link block lg:inline-block lg:mt-0 py-2 px-3 mr-20"
          :class="[navTextColor, hoverColor, hasAlternativeBg]"
        >
        Works
        </nuxt-link>
        <nuxt-link
          to="/About"
          href="#responsive-header"
          class="link block lg:inline-block lg:mt-0 y-2 px-3 mr-10"
          :class="[navTextColor, hoverColor, hasAlternativeBg]"
        >
        About
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'p-header',
  props: {
    alternativeBg: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mainTextColor () {
      return this.alternativeBg ? 'text-white' : 'text-black'
    },
    secondaryTextColor () {
      return this.alternativeBg ? 'text-main-dark' : 'text-gray-500'
    },
    navTextColor () {
      return this.alternativeBg ? 'text-main-dark' : 'text-black'
    },
    bgColor () {
      return this.alternativeBg ? 'bg-main' : 'bg-white'
    },
    hoverColor () {
      return this.alternativeBg ? 'hover:text-white' : 'hover:text-main'
    },
    selectedColor () {
      return this.alternativeBg ? 'hover:text-white' : 'hover:text-main'
    },
    hasAlternativeBg () {
      return this.alternativeBg ? 'alternative-bg' : false
    }
  },
  created () {

  }
}
</script>
<style lang="scss">
.link {
  transition: all .2s linear;
}

.nuxt-link-active {
  @apply text-main;

  &.alternative-bg {
    @apply text-white;
  }
}
</style>
