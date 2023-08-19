<script lang="ts" setup>
/**
 * A switch to Vertical or Horizontal Layout.
 * This is a child component for CNavigation
 * @name 'navigation-hor-ver-l'
 * @alias 'CNavigationHorVerL'
 * @version 1.0.0
 * @example
 * <CNavigationHorVerL></CNavigationHorVerL>
 */

defineOptions({
  inheritAttrs: true
})

defineProps<{
  stack: false
}>()
</script>

<template lang="pug">
template(v-if='stack')
  StackL(v-bind='$attrs' compact)
    slot
template(v-else)
  ClusterL(v-bind='$attrs' narrow)
    slot
</template>
