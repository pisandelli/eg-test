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
import type { NavigationTypes } from 'interfaces/NavigationTypes'

defineProps<{
  data: NavigationTypes[] | undefined
  stack: boolean
}>()
</script>

<template lang="pug">
CNavigationHorVerL.menu(tag='ul' :isVertical="stack")
  template(v-for='item in data' :key='item.label')
    li.item: NuxtLink.anchor(:to='item.url' :title='item.label') {{ item.label }}
</template>

<style lang="stylus" scoped>
.menu
  list-style: none
</style>
