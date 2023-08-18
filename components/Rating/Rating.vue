<script lang="ts" setup>
/**
 * Star rating component.
 * @name 'c-rating'
 * @alias 'CRating'
 * @version 1.0.0
 * @example
 * <CRating></CRating>
 */
const props = defineProps<{
  rating: Number
}>()
</script>

<template lang="pug">
.rating
  span.rate(class='text:bold') {{ props.rating }}
  span.rate-stars
</template>

<style lang="stylus" scoped>
.rating
  font-size: vaR(--font-size-big)
.rate-stars
  --star-size: 3.75rem //60px
  --star-color: var(--color-grey-light)
  --star-background: var(--color-warning)
  --percent: calc(v-bind('props.rating')/5 * 100%)

  display: inline-block
  font-size: var(--font-size-big)
  font-family: Times
  line-height: 1
  padding-inline-start: 5px

  &::before
    content: '★★★★★'
    letter-spacing: 3px
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent))
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
</style>
