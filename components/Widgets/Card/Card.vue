<script lang="ts" setup>
/**
 * Common card Widget.
 * @name 'widgets-card'
 * @alias 'WCard'
 * @version 1.0.0
 * @example
 * <WCard></WCard>
 */
import type Course from '~/types/api/Course'

defineProps<{
  data: Course
}>()
</script>

<template lang="pug">
BoxL.card(compact borderless :title='data.name')
  CLabel.label(v-if='data.feature' color='--color-accent') Mais vendido
  StackL.content(compact)
    .header
      NuxtImg(src='/courses/9a34d5c8/3569919_3c3c.jpg' format='webp' :alt='data.name')
    StackL.wrap
      .body
        h3(class='title') {{  data.name }}
        small Por {{ data.author }}
        ClusterL.rates(narrow)
          CRating(:rating='data.user_rate')
          small: NuxtLink.reviews(to='#' title='Reviews') {{ '('+ data.reviews + ')' }}
      footer.footer
        CenterL(intrinsic)
          CButton(:to="'/cursos/' + data.id"  tag='a' small pill accent) Detalhes
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
.content
  block-size: 100%
.title
  font-size: calc(var(--font-size-base) + .1rem)
  font-weight: var(--weight-bold)
  color: var(--color-primary)
  // _ellipsis(20ch)

.wrap
  padding-inline: var(--s0)
  flex-grow: 1
  justify-content: space-between

.rates
  padding-block-start: var(--s0)

.footer
  padding-block-end: var(--gap)
</style>
