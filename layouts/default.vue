<script lang="ts" setup>
/**
 * The default layout.
 * @name 'DefaultLayout'
 * @version 1.0.0
 */

// Check if we are not at homepage
const route = useRoute()
const isPage = computed(() => {
  return route.path !== '/'
})
</script>

<template lang="pug">
.cover
  header
    WTopbar
  main(:class="{'page': isPage}")
    slot
  WFooter
</template>
<style lang="stylus" scoped>
.cover
  display: flex
  flex-direction: column
  min-block-size: 100vh

  & > :first-child:not(main)
    margin-block-start: 0

  & > :last-child:not(main)
    margin-block-end: 0

  & > main
    margin-block: auto

  & > .page
    margin-block-start: calc(86px + 16px)
    margin-block-end: auto
</style>
