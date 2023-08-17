<script lang="ts" setup>
/**
 * Website's topbar with
 * main navigation and logo.
 * @name 'widgets-topbar'
 * @alias 'WTopbar'
 * @version 1.0.0
 * @example
 * <WTopbar></WTopbar>
 */

// Collection of Essential Vue Composition Utilities
// https://vueuse.org/
import { useWindowScroll } from '@vueuse/core'

/**
 * Retrieve topbar offsetHeight
 * to be used on scroll event
 */
// ref from template
const topbar: Ref = ref(null)
const topbarHeight = ref(0)

onMounted(() => {
  // Set topbar height
  topbarHeight.value = topbar.value?.offsetHeight
})

/**
 * Apply filled class when y-scroll is higher
 * than topbar height.
 */
const { y } = useWindowScroll()
const checkScroll = computed(() => {
  return y.value > topbarHeight.value
})

// FIXME: Remove dummy data
const mainNavigation = ref([
  {
    label: 'Início',
    url: '#'
  },
  {
    label: 'Quem somos',
    url: '#'
  },
  {
    label: 'Cursos',
    url: '#'
  }
])
</script>
<template lang="pug">
.topbar(:class="{'filled' : checkScroll}" ref='topbar')
  CenterL.container
    ClusterL(between)
      Logo(:class="{'dark': checkScroll}")
      Navigation(:data='mainNavigation')
</template>

<style lang="stylus" scoped>
.topbar
  position: fixed
  background-color: transparent
  inline-size: 100%
  padding-block: var(--s0)
  _transition background-color var(--animation-speed) linear
  z-index: var(--stack-700)

  &.filled
    --navigation-item__bg--hover: transparent
    --navigation-item__color: var(--color-primary)
    --navigation-item__color--hover: var(--color-accent)
    background-color: var(--color-neutral)

  .container
    --max-width: 83.5rem // 1336px

  .logo
    inline-size: 8rem
</style>
