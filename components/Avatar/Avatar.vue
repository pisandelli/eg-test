<script lang="ts" setup>
/**
 * Component to render Avatars.
 * @name 'c-avatar'
 * @alias 'CAvatar'
 * @version 1.0.0
 */
</script>
<template lang="pug">
.avatar
  NuxtImg(src="avatar.jpg" alt='Matt Murdock' title="Matt Murdock" format='webp')
</template>

<style lang="stylus" scoped>
.avatar
  --avatar-size: 4ch
  border-radius: 50%
  overflow: hidden
  _square(var(--avatar-size))
  _box-shadow()
</style>