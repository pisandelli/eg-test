<script lang="ts" setup>
/**
 * Render Horizontal or Vertical Navigation.
 * @name 'c-navigation'
 * @alias 'CNavigation'
 * @version 1.0.0
 * @example
 * <CNavigation></CNavigation>
 */

// Main navigation data
import type { Navigation } from '~/interfaces/Navigation'

defineProps<{
  data: Navigation[] | undefined
  stack?: boolean
}>()

// Get current Viewport
const viewport = useViewport()

// Toggle Menu visibility
// const showMenu = ref(false)
// function toggleMenu() {
//   showMenu.value = !showMenu.value
// }

// Apply classes to menu based on current viewport and visibility
// const checkVisibility = computed(() => {
//   const visible = showMenu.value || viewport.isGreaterOrEquals('desktop')
//   const isVisible = !visible ? 'display:none' : ''
//   const isBox = viewport.isLessThan('desktop') ? 'inBox' : ''

//   return `${isBox} ${isVisible}`
// })
</script>

<template lang="pug">
nav
  ClusterL.main-nav
    CNavigationHorVerL.menu(tag='ul' :stack="stack")
      template(v-for='item in data' :key='item.label')
        li.item: NuxtLink.anchor(:to='item.url' :title='item.label') {{ item.label }}
  //- button.menuIcon(v-if="viewport.isLessThan('desktop')" icon-only icon="ion:menu" aria-hidden="true" @click='toggleMenu()')
</template>

<style lang="stylus" scoped>
.main-nav
  &.inBox
    min-inline-size: 15rem
    border-radius: var(--border-radius)
    position: absolute
    padding: var(--gap)
    top: 80%
    right: @padding
    background-color: var(--color-neutral)
    _box-shadow()

    .menu
      .item
        margin-bottom: var(--gap)

.item
  text-transform: uppercase
  font-weight: var(--weight-bold)

  a
    color: var(--navigation-item__color, var(--color-neutral, #fbfbfb))
    background-color: var(--navigation-item__bg, transparent)
    text-decoration: none
    padding-inline: var(--s0)
    padding-block: var(--s-1)
    border-radius: var(--border-radius)

    &:hover,
    &:focus
      background-color: var(--navigation-item__bg--hover, var(--color-neutral, #fbfbfb))
      color: var(--navigation-item__color--hover, var(--color-accent, #ee1696))
.menu
  list-style: none
  &Icon
    font-size: var(--font-size-huge)
</style>
