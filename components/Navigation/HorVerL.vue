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

const props = defineProps({
  isVertical: {
    type: Boolean,
    default: false
  }
})
</script>

<template lang="pug">
template(v-if='props.isVertical')
  StackL(v-bind='$attrs' compact)
    slot
template(v-else)
  ClusterL(v-bind='$attrs' narrow)
    slot
</template>
