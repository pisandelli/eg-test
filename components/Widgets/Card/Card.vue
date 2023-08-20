<script lang="ts" setup>
/**
 * Common card Widget.
 * @name 'widgets-card'
 * @alias 'WCard'
 * @version 1.0.0
 * @example
 * <WCard></WCard>
 */
</script>

<template lang="pug">
BoxL.card(compact borderless title='Formação Frontend - Básico ao Avançado (2023)')
  CLabel.label(color='--color-accent') Mais vendido
  StackL(compact)
    .header
      NuxtImg(src='/courses/9a34d5c8/3569919_3c3c.jpg' format='webp' alt='Banner - Formação Frontend - Básico ao Avançado (2023)')
    StackL.wrap
      .body
        h3(class='title') Formação Frontend - Básico ao Avançado (2023)
        small Por Matt Murdock
        ClusterL.rates(narrow)
          CRating(:rating='4.3')
          small: NuxtLink.reviews(to='#' title='Reviews') (456.989)
      footer.footer
        CenterL(intrinsic)
          CButton(to='/cursos/234' tag='a' small pill accent) Detalhes
</template>

<style lang="stylus" scoped>
.anchor
  text-decoration: none
.label
  position: absolute
  inset-block-start: var(--s-1)
  inset-inline-end: -1px
.card
  position: relative
  inline-size: 18.5rem
  _box-shadow()
  img
    width: 100%
  &:hover
    .title
      color: var(--color-accent)

.title
  font-size: calc(var(--font-size-base) + .1rem)
  font-weight: var(--weight-bold)
  color: var(--color-primary)
  // _ellipsis(20ch)

.wrap
  padding-inline: var(--s0)

.rates
  padding-block-start: var(--s0)

.footer
  padding-block-end: var(--gap)
</style>
