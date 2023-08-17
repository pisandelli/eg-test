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
  CenterL(intrinsic center-text)
    StackL
      h2.title Confiam em nós
      ClusterL.companies(tag='ul')
        li: NuxtImg.logo(src='https://placehold.it/100x50' alt='company logo')
        li: NuxtImg.logo(src='https://placehold.it/100x50' alt='company logo')
        li: NuxtImg.logo(src='https://placehold.it/100x50' alt='company logo')
        li: NuxtImg.logo(src='https://placehold.it/100x50' alt='company logo')
        li: NuxtImg.logo(src='https://placehold.it/100x50' alt='company logo')
</template>

<style lang="stylus" scoped>
.trusted
  padding-block: 2rem

.title
  font-size: var(--font-size-big)
</style>
