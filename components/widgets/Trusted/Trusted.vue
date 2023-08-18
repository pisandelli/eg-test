<script lang="ts" setup>
/**
 * Homepage's Trusted By bar.
 * It renders a list of company's logo
 * that trust in our courses and trainings
 * @name 'widgets-trusted'
 * @alias 'WTrusted'
 * @version 1.0.0
 * @example
 * <WTrusted></WTrusted>
 */
</script>

<template lang="pug">
section.trusted
  CenterL.container(center-text)
    StackL
      h2.title Confiam em nós
      ClusterL.companies(narrow around)
        NuxtImg.logo(src='/trustedBy/box.svg' alt='Box')
        NuxtImg.logo(src='/trustedBy/eventbrite.svg' alt='Eventbrite')
        NuxtImg.logo(src='/trustedBy/nasdaq.svg' alt='Nasdaq')
        NuxtImg.logo(src='/trustedBy/netapp.svg' alt='NetApp')
        NuxtImg.logo(src='/trustedBy/volkswagen.svg' alt='VolksWagen')
</template>

<style lang="stylus" scoped>
.trusted
  border-bottom: 1px solid var(--color-grey-light)
  padding-block: var(--s1)
  background-color: var(--color-grey-light)
.container
  --max-width: 83.5rem
.companies
  list-style-type: none
.title
  font-weight: var(--weight-bold)
  color: var(--color-primary)
  font-size: var(--font-size-big)

.logo
  opacity: .8
  block-size: var(--s3)
</style>
