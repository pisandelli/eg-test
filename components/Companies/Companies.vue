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
ClusterL.companies(narrow center)
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
  inline-size: var(--companies-logo-width, 9rem)
  block-size: var(--companies-logo-height, var(--s3, 3.375rem))
  object-fit: cover
</style>
