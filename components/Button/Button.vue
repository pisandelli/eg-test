<script lang="ts" setup>
/**
 * Custom buttons.
 * @name 'Button'
 * @version 1.0.0
 *
 * This button accepts modifiers as attributes
 * Supported modifiers are:
 * default, danger, success, warning, info, outlined, text-only, pill
 */

interface PsButton {
  tag?: 'a' | 'button' | 'input'
  icon?: string
  to?: string
}

const props = withDefaults(defineProps<PsButton>(), {
  tag: 'button',
  icon: '',
  to: ''
})

/**
 * Define which component should be
 * rendered. In case of an <a> it should
 * render a <nuxt-link> which deals better
 * with external links.
 */
const componentToShow = computed(() => {
  return props.tag === 'a' ? resolveComponent('NuxtLink') : props.tag
})
</script>

<template lang="pug">

component(:is='componentToShow' class='button' v-bind='$attrs')
  ClusterL(narrow)
    .icon(v-if="props.icon")
      icon(:name="props.icon")
    slot

</template>

<style lang="stylus" scoped>
// .icon
//   padding-inline-end: var(--gap)
.button
  max-inline-size: max-content
  padding: var(--s0) var(--gap)
  color: var(--color-neutral)
  line-height: 1
  font-weight: var(--weight-bold)
  text-transform: uppercase
  font-size: var(--font-size-base)
  border-radius: var(--border-radius)
  border: 0
  cursor: pointer
  background-color: var(--color-primary)
  _box-shadow()
  _transition(filter var(--animation-speed) linear)

  &:is(:hover, :focus)
    filter: saturate(160%)

  &[pill]
    --border-radius: 2rem

  &[small]
    font-size: var(--font-size-tiny)
    padding: var(--s-1) var(--s0)

  &[accent]
    background-color: var(--color-accent)

  &[disabled]
    box-shadow: none
    pointer-events: none
    color: var(--color-grey-dark)
    background-color: var(--color-grey-light)
    opacity: .7

  &[outline]
    color: var(--color-outline, var(--color-neutral))
    background-color: transparent
    box-shadow: none
    border: 1px solid

  &[text-only]
    color: var(--color-text-only, var(--color-primary))
    background-color: transparent
    box-shadow: none
    padding: 0

    &:is(:hover, :focus)
      color: var(--color-text-only--hover, var(--color-accent))

  &[icon-only]
    color: var(--color-icon-only, var(--color-primary))
    // background-color: transparent
    padding: .7rem
    box-shadow: none
    line-height: 0
    border-radius: 50%

    &:is(:hover, :focus),
    &.active
      color: var(--color-icon-only--hover, var(--color-accent))
</style>
