<script lang="ts" setup>
/**
 * Generate tabs and tab-content from
 * stored data.
 * @name 'widgets-tabs'
 * @alias 'WTabs'
 * @version 1.0.0
 * @example
 * <WTabs></WTabs>
 */

// Get store
import { storeToRefs } from 'pinia'
import { useCategoriesStore } from '~/store/CategoriesStore'
const categoryStore = useCategoriesStore()

const { categories, activeCategory, courses, isLoading } = storeToRefs(categoryStore)

function changeTab(catId: number) {
  activeCategory.value = catId
}

onMounted(async () => {
  // Run actions to fetch data
  // and save into Store

  // Fetch Categories
  await categoryStore.fetchCategories()

  // type guard
  if (!activeCategory.value) {
    throw createError('could not get active category')
  }

  // Get courses for active category
  await categoryStore.fetchCategoryCourses(activeCategory.value)
})

// Get current Viewport
const viewport = useViewport()
</script>

<template lang="pug">
StackL(v-if="viewport.isGreaterOrEquals('desktop')")
  ClusterL.tabs(tag='nav' wide)
    template(v-for='category in categories' :key='category.id')
      CButton(:class='{active: activeCategory === category.id}' text-only type='button' :value='category.name' @click='changeTab(+category.id)') {{ category.name }}
  .tab-panel
    CLoading(v-if='isLoading')
    StackL(v-else)
      ClusterL.list(center)
        template(v-for="course in courses" :key='course.id')
          WCard(:data='course')
      CenterL
        CButton(to='/cursos' tag='a' title='Todos os cursos' pill) Ver todos os cursos

//- Only for mobile
StackL.accordion(v-else)
  BoxL(compact sharp)
    template(v-for='category in categories' :key='category.id')
      BoxL.header(borderless sharp @click='changeTab(+category.id)')
        h4.name {{ category.name }}
      BoxL.courses(borderless sharp compact :class='{show: activeCategory === category.id}')
        CLoading(v-if='isLoading')
        ClusterL.list(v-else center)
          template(v-for="course in courses" :key='course.id')
            WCard(:data='course')
  CenterL
    CButton(to='/cursos' tag='a' title='Todos os cursos' pill) Ver todos os cursos
</template>

<style lang="stylus" scoped>
.name
  font-size: var(--font-size-big)
  color: var(--color-primary)

.courses
  padding-block: 1rem
.active
  color: var(--color-accent)
.tabs
  border-bottom: 1px solid var(--color-grey-light)
  padding-block-end: var(--gap)

.list
  align-items: stretch

.courses
  display: none
  &.show
    display: block
</style>
