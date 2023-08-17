<script lang="ts" setup>
/**
 * A switch to Vertical or Horizontal Layout.
 * @name 'HorVer'
 * @version 1.0.0
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
