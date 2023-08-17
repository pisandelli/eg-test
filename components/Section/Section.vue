<script lang="ts" setup>
/**
 * Default page sections.
 * @name 'c-section'
 * @alias 'CSection'
 * @version 1.0.0
 * @example
 * <CSection></CSection>
 */

const props = defineProps<{
  title: string
}>()
</script>

<template lang="pug">
section.page-section
  CenterL.container
    StackL
      h2.title {{ props.title }}
      slot
</template>

<style lang="stylus" scoped>
.container
  --max-width: 83.5rem

.title
  font-size: calc(var(--font-size-huge) * 1.5)
  font-weight: var(--weight-bold)
  color: var(--color-primary)
  padding-inline-start: var(--gap)
  position: relative

  &::after
    --thickness: .375rem //6px
    position: absolute
    inset-inline-start: 0
    inset-block-start: 0
    content: ''
    display: block
    inline-size: var(--thickness)
    block-size: 100%
    background-color: var(--color-accent)
    border: calc(var(--thickness) / 2) solid var(--color-accent)
    border-radius: calc(var(--thickness) / 2)
</style>
