<script lang="ts" setup>
/**
 * Two columns layout.
 * @name 'TwoColumnsLayout'
 * @version 1.0.0
 */
</script>

<template lang="pug">
CoverL
  header
    WTopbar
  main.page
    CenterL.content
      SidebarL.right
        slot
  WFooter
</template>
<style lang="stylus" scoped>
.content
  --sidebar-gap: var(--gap)
  --sidebar-column-size: 25%
  --max-width: 83.6rem
  --sidebar-content-size: 100%
  @media(min-width: 1024px)
    --sidebar-content-size: 65ch
</style>
