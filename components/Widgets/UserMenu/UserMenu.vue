<script lang='ts' setup>
/**
 * A menu item with user's
 * options.
 * @name 'widgets-user-menu'
 * @alias 'WUserMenu'
 * @version 1.0.0
*/

// Get current Viewport
const viewport = useViewport()

// Flag to toggle user menu
const active = ref(false)
</script>

<template lang="pug">
.user-menu
  ClusterL(narrow)
    .select(v-if="viewport.isGreaterOrEquals('desktop')" @click='active = !active')
      p.name Matt Murdock
      icon(name='ion:caret-down-outline')
    CAvatar(@click='active = !active')
  BoxL.user-options(v-if='active' compact)
    StackL.list(tag='ul' squeezed @click='active = !active')
      li.item
        icon(name='ion:person-circle-outline')
        span Editar Perfil
      li.item
        Icon(name='ion:settings-outline')
        span Configurações
      li.item
        Icon(name='ion:log-out-outline')
        span Logout
</template>

<style lang="stylus" scoped>
.user-menu
  font-weight: var(--weight-bold)
  color: var(--color-userMenu, var(--color-neutral))
  position: relative

.select
  display: flex
  align-items: center
  gap: .4rem
  cursor: pointer

.user-options
  position: absolute
  inset-block-start: 3rem
  inset-inline-end: 0
  _box-shadow()
  @media(min-width: 1024px)
    inline-size: 100%
ul
  list-style-type: none

.item
  cursor: pointer
  display: flex
  align-items: center
  gap: .5rem
  padding-inline: 1rem
  padding-block: .5rem

  &:is(:hover, :focus)
    color: var(--color-primary)
    background-color: var(--color-grey-light)

</style>