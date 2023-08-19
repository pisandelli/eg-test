<script lang="ts" setup>
/**
 * Simple styles for page descriptions.
 * @name 'c-page-description'
 * @alias 'CPageDescription'
 * @version 1.0.0
 */
</script>

<template lang="pug">
CenterL.container
  .description
    slot
</template>

<style lang="stylus" scoped>
.container
  --max-width: 83.6rem
  padding: 0

.description
  font-size: var(--font-size-big)
  font-weight: var(--weight-light)
</style>
