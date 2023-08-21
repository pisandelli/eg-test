<script lang="ts" setup>
/**
 * Página com a listagem de todos os cursos.
 * @name 'Cursos'
 * @version 1.0.0
 */

// GET Courses Store
import { storeToRefs } from 'pinia'
import { useCoursesStore } from '~/store/CoursesStore';
const courseStore = useCoursesStore()

// Courses States
const { courses, isLoading } = storeToRefs(courseStore)

// Fetch all courses data
onMounted(async () => {
  await courseStore.fetchAllCourses()
})
</script>

<template lang="pug">
article.cursos
  CLoading(v-if='isLoading')
  StackL(v-else wide)
    CSection(title='Todos os cursos')
      CPageDescription
        p Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur enim inventore optio iste veniam voluptas deleniti suscipit exercitationem possimus veritatis ex, repellendus illum nostrum voluptatum dolores ipsum saepe molestias?

    template(v-for='category in courses' :key='category.id')
      CSection(:title='category.category_name' tag='h3')
        ClusterL.list
          template(v-for='course in category.courses')
            WCard(:data='course')
</template>

<style lang="stylus" scoped>
.container
  --max-width: 83.6rem

.list
  align-items: stretch
</style>
