<script lang="ts" setup>
/**
 * Homepage's Hero Widget.
 * @name 'widgets-hero'
 * @alias 'WHero'
 * @version 1.0.0
 * @example
 * <WHero></WHero>
 */

// Get current Viewport
const viewport = useViewport()

const checkIsDesktop = computed(() => {
  return viewport.isGreaterOrEquals('desktop')
})

// Set Hero's background image
const $img = useImage()
const backgroundImage = $img('/heroBg.svg')
const backgroundURL = `url(${backgroundImage})`
</script>

<template lang="pug">
section.hero
  ClusterL.container(between)
    StackL.info
      h1.title Treinamentos e cursos online personalizados
      p Aenean eleifend ac sapien ac mollis. Vestibulum in lectus ante. Nunc fringilla, ex nec viverra posuere, nibh nulla euismod justo, in semper tellus purus non ipsum.
      ClusterL
        CButton.cta(tag='a' to='/' accent pill) Matricule-se agora
        p(class='text:bold') São mais de 700 cursos e seminários
    .image(v-if='checkIsDesktop')
      NuxtImg(src='heroComposition.svg' alt='Online Education')
</template>

<style lang="stylus" scoped>
.hero
  inline-size: 100%
  block-size: 100vh
  background-color: var(--color-neutral)
  background-image: v-bind('backgroundURL')
  background-size: cover
  position: relative

  .container
    position: absolute
    inset-block-start: 50%
    inset-inline-start: 50%
    transform: translate(-50%, -50%)
    @media(min-width: 1024px)
      inline-size: 83.5rem

.info
  color: var(--color-neutral)
  font-size: var(--font-size-big)
  font-weight: var(--weight-light)
  @media(min-width: 1024px)
    max-inline-size: 48%

.title
  font-size: calc(var(--font-size-huge) * 2)
  font-weight: var(--weight-bold)
  text-shadow: 0 0 4px var(--color-default)

.image
  width: 50%
  img
    width: 100%
</style>
