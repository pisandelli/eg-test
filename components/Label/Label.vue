<script lang="ts" setup>
/**
 * Common Label Component.
 * @name 'c-label'
 * @alias CLabel
 * @version 1.0.0
 * @example
 * <CLabel></CLabel>
 */
const props = defineProps<{
  icon?: string
}>()
</script>

<template lang="pug">
span.label
  span.icon(v-if="props.icon")
    icon(:name="props.icon")
  slot
</template>

<style lang="stylus" scoped>
.label
  padding: .2rem .5rem
  letter-spacing: 1px
  font-weight: var(--weight-bold)
  font-size: var(--font-size-tiny)
  color: var(--color-label-txt, var(--color-default, #595959))
  background-color: var(--color-label-bg, #faf216)
</style>
