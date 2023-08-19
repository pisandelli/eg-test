<script lang="ts" setup>
/**
 * Company Logo.
 * The color is defined by the custom
 * property `--logo-color`. You can
 * change it in you CSS code.
 * @name 'c-logo'
 * @alias 'CLogo'
 * @version 1.0.0
 * @example
 * <CLogo></CLogo>
 */
</script>

<template lang="pug">
svg.logo: use(xlink:href="~images/sprites.svg#logoPisa")
</template>
<style lang="stylus" scoped>
.logo
  --color-logoPisa: var(--color-neutral, #fbfbfb)
  inline-size: 9rem
  block-size: var(--s3)
  object-fit: cover

  &.dark
    --color-logoPisa: var(--color-primary, #5f92d3)
    _transition fill var(--animation-speed) linear
</style>
