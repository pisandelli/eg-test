<script lang='ts' setup>
/**
 * Loading icon.
 * @name 'c-loading'
 * @alias CLoading
 * @version 1.0.0
 * @example
 * <CLoading></CLoading>
*/
</script>

<template lang="pug">
CenterL(intrinsic)
  icon.icon(name='ion:reload-circle-outline' size='3rem')
</template>

<style lang="stylus" scoped>
.icon
  aspect-ratio: 1 / 1
  opacity: .3
  animation: rotate .8s linear infinite

@keyframes rotate {
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(359deg)
  }
}
</style>