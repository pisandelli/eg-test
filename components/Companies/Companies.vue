<script lang="ts" setup>
/**
 * A List of the companies that
 * trust on us.
 * @name 'c-companies'
 * @alias 'CCompanies'
 * @version 1.0.0
 * @example
 * <CCompanies></CCompanies>
 */
</script>

<template lang="pug">
ClusterL.companies(narrow around)
  svg.logo: use(xlink:href='~images/sprites.svg#box' alt='Box')
  svg.logo: use(xlink:href='~images/sprites.svg#eventbrite' alt='Eventbrite')
  svg.logo: use(xlink:href='~images/sprites.svg#nasdaq' alt='Nasdaq')
  svg.logo: use(xlink:href='~images/sprites.svg#netapp' alt='NetApp')
  svg.logo: use(xlink:href='~images/sprites.svg#volkswagen' alt='VolksWagen')
</template>

<style lang="stylus" scoped>
.companies
  list-style-type: none

.logo
  opacity: .8
  width: 9rem
  height: var(--s3)
  object-fit: cover
</style>
