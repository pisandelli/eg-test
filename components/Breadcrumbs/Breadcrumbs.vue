<script lang="ts" setup>
/**
 * A Dummy Breadcrumb component.
 * @name 'c-breadcrumbs'
 * @alias 'CBreadcrumbs'
 * @version 1.0.0
 * @example
 * <CBreadcrumbs></CBreadcrumbs>
 **/

const props = defineProps<{
  id: string
}>()
</script>

<template lang="pug">
ClusterL.breadcrumbs(narrow)
  span: NuxtLink(to='/' title='Homepage') Home
  span: NuxtLink(to='/cursos' title='Todos os Cursos') Cursos
  span {{ id }}
</template>

<style lang="stylus" scoped>
span:not(:last-child)
  font-weight: var(--weight-bold)
  color: var(--color-primary)
  a
    text-decoration: none
  &::after
    display: inline-block
    content: '\290F'
    inline-size: 1rem
    aspect-ratio: 1 / 1
    padding-inline-start: .5rem
</style>
