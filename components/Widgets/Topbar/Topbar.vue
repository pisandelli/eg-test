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

import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/store/GlobalStore'
const globalStore = useGlobalStore()

const { navigation } = storeToRefs(globalStore)

onMounted(async () => {
  // Get main navigation from API
  await globalStore.fetchMainNavigation()
})

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
  const route = useRoute()
  return (y.value > topbarHeight.value) || route.path !== '/'
})

</script>
<template lang="pug">
.topbar(:class="{'filled' : checkScroll}" ref='topbar')
  CenterL.container
    ClusterL(between)
      NuxtLink(to='/' aria-label='EadPisa')
        CLogo(:class="{'dark': checkScroll}")
      ClusterL
        WMainNav(:data='navigation')
        WUserMenu
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
    --color-userMenu: var(--color-primary)
    background-color: var(--color-neutral)
    _box-shadow()

  .container
    --max-width: 83.5rem // 1336px

  .logo
    inline-size: 8rem
</style>
