<script lang="ts" setup>
/**
 * Common card component.
 * @name 'c-card'
 * @alias 'CCard'
 * @version 1.0.0
 * @example
 * <CCard></CCard>
 */
</script>

<template lang="pug">
BoxL.card(compact)
  NuxtLink.anchor(to='/')
    StackL(compact)
      .header
        NuxtImg(src='/courses/9a34d5c8/3569919_3c3c.jpg' format='webp')
      .body
        h3.title Formação Frontend
        small Matt Murdock
        p.votes 4,9 * * * * *
          span.reviews (456.989)
</template>

<style lang="stylus" scoped>
.anchor
  text-decoration: none
.card
  max-inline-size: 240px

  &:hover
    .title
      color: var(--color-accent)
.title
  font-size: var(--font-size-big)
  font-weight: var(--weight-bold)
  color: var(--color-primary)

.body
  padding-inline: var(--s0)
</style>
