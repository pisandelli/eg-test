<script lang="ts" setup>
/**
 * Main footer.
 * @name 'widgets-footer'
 * @alias 'WFooter'
 * @version 1.0.0
 * @example
 * <WFooter></WFooter>
 */
</script>

<template lang="pug">
footer.footer
  StackL
    .header
      ClusterL
        CLogo.logo
        CCompanies.companies

</template>

<style lang="stylus" scoped>
.footer
  padding-inline: var(--gap)
  background-color: var(--color-primary)

.logo
  inline-size: 8rem

.companies
  --color-symbol: var(--color-neutral)
</style>
