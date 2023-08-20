<script lang="ts" setup>
/**
 * Página com detalhes do curso.
 * @name 'Curso'
 * @version 1.0.0
 */
definePageMeta({
  layout: 'two-col-right'
})
</script>

<template lang="pug">
BoxL.content(compact)
  BoxL.banner(borderless sharp)
    StackL
      CBreadcrumb(id='234')
  BoxL(borderless sharp)
    p Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ea. Minima quidem rem culpa in mollitia ipsam et dolorum repellendus a! Aspernatur eveniet obcaecati blanditiis quis accusamus tempore esse sed?
BoxL.sidebar
  p sidebar
</template>

<style lang="stylus" scoped>
.banner
  background-color: var(--color-grey-light)
.sidebar
  _box-shadow()
</style>
