<script lang="ts" setup>
/**
 * Homepage's Hero Widget.
 * @name 'widgets-hero'
 * @alias 'WHero'
 * @version 1.0.0
 * @example
 * <WHero></WHero>
 */

// Set Hero's background image
// TODO: Add Hero from Mocked API
const $img = useImage()
const backgroundImage = $img('/heroBg.svg')
const backgroundURL = `url(${backgroundImage})`
</script>

<template lang="pug">
section.hero
  ClusterL(around)
    StackL.info
      h1.title Treinamentos e cursos online
      p Aenean eleifend ac sapien ac mollis. Vestibulum in lectus ante. Nunc fringilla, ex nec viverra posuere, nibh nulla euismod justo, in semper tellus purus non ipsum.
      ClusterL
        button.cta Click Here
        Input(type='search')
    .image
        NuxtImg(src='https://placehold.it/300x450')
</template>

<style lang="stylus" scoped>
.hero
  inline-size: 100%
  block-size: 100vh
  background-color: var(--color-neutral)
  background-image: v-bind('backgroundURL')
  background-size: cover

.info
  color: var(--color-neutral)
  font-size: var(--font-size-bigger)
  font-weight: var(--weight-light)
  max-inline-size: 45%

.title
  font-size: calc(var(--font-size-huge) * 2)
  font-weight: var(--weight-bold)
  text-shadow: 0 0 4px var(--color-default)
</style>
