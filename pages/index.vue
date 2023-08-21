<script lang="ts" setup>
/**
 * Index Page.
 * @name 'PageIndex'
 * @version 1.0.0
 */

import { useCategoriesStore } from '~/store/CategoriesStore'
const categoryStore = useCategoriesStore()

onMounted(async () => {
  await categoryStore.fetchCategories()
  await categoryStore.fetchCategoryCourses(1)
})
</script>

<template lang="pug">
StackL(wide)
  div
    WHero
    WTrusted
  CSection.new(title='Destaques' tag='h2')
    WTabs

</template>
