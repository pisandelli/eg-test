<script lang="ts" setup>
/**
 * Component_Description.
 * @name 'widgets-tabs'
 * @alias 'WTabs'
 * @version 1.0.0
 * @example
 * <WTabs></WTabs>
 */
</script>

<template lang="pug">
StackL
  ClusterL.tabs(tag='nav' wide)
    CButton(text-only type='button' value='Formação Frontend') Formação Frontend
    CButton(text-only type='button' value='Formação Backend') Formação Backend
    CButton(text-only type='button' value='Trilha Fullstack') Trilha Fullstack
    CButton(text-only type='button' value='Desenvolvimento Python') Desenvolvimento Python
  .tab-panel
    StackL
      ClusterL(center)
        WCard
        WCard
        WCard
        WCard
      CenterL
        CButton(to='/cursos' tag='a' title='Todos os cursos' pill) Ver todos os cursos

</template>

<style lang="stylus" scoped>
.tabs
  border-bottom: 1px solid var(--color-grey-light)
  padding-block-end: var(--gap)
</style>
