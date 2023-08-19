<script lang="ts" setup>
/**
 * Default page sections.
 * @name 'c-section'
 * @alias 'CSection'
 * @version 1.0.0
 * @example
 * <CSection></CSection>
 */

const props = withDefaults(
  defineProps<{
    title: string
    tag?: string
  }>(),
  {
    tag: 'h1'
  }
)
</script>

<template lang="pug">
section.page-section
  CenterL.container
    component(:is='props.tag').title {{ props.title }}
    slot
</template>

<style lang="stylus" scoped>
.container
  --max-width: 83.5rem

h1,
h2
  &.title
    font-size: calc(var(--font-size-huge) * 1.5)
    font-weight: var(--weight-bold)
    color: var(--color-primary)
    padding-inline-start: var(--gap)
    position: relative
    margin-block-end: calc(var(--gap, 1.5rem) * 3);

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

h3.title
  font-size: var(--font-size-huge)
  color: var(--color-primary)
  margin-block-end: var(--gap, 1.5rem);
</style>
