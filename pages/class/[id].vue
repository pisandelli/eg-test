<script lang="ts" setup>
/**
 * Página com a aula.
 * @name 'Aula'
 * @version 1.0.0
 */

// GET Courses Store
import { storeToRefs } from 'pinia'
import { useCoursesStore } from '~/store/CoursesStore'
const courseStore = useCoursesStore()

// Courses States
const { course, isLoading } = storeToRefs(courseStore)
const route = useRoute()
const courseId = route.params.id.toString().substring(0, 2)

// Fetch all courses data
onMounted(async () => {
  await courseStore.fetchCourseById(+courseId)
})

const { data } = await useAsyncData('doc', () => {
  return queryContent('/aulas').findOne()
})

// Use 2 columns layout
definePageMeta({
  layout: 'classes'
})

</script>

<template lang="pug">
CLoading(v-if='isLoading')
BoxL.content(v-else compact)
  BoxL.banner(borderless sharp compact)
    NuxtImg(src='/video.png' format='webp')
  BoxL(borderless sharp)
    StackL
      section.description
        ContentRenderer(:value='data')
          ContentRendererMarkdown(:value="data")
      CenterL(tag='section')
        CButton.cta(tag='a' to='/cursos' pill) Mais cursos

BoxL.sidebar(v-if='!isLoading' compact)
  StackL.list(tag='ul' squeezed)
    template(v-for='item in course.syllabus' :key='item.name')
      li.item {{item.name}}
</template>

<style lang="stylus" scoped>
.banner
  background-color: var(--color-primary-light)
.sidebar
  _box-shadow()
  
.list
  list-style-type: none
  margin: 0
  .item
    padding-inline: var(--s1)
    padding-block: var(--s1)
    font-size: 1.2rem
    border-bottom: 1px solid #dedede
    cursor: pointer
    &:is(:hover, :focus)
      background-color: var(--color-grey-light)


.description
  padding-block: var(--s2)
  :deep(h2)
    font-size: var(--font-size-huge)
    font-weight: var(--weight-bold)
    color: var(--color-default)
    padding-block-end: var(--s1)
    a
      text-decoration: none
  :deep(h2:not(:first-child))
    margin-block-start: var(--s1)

:deep(ul)
  margin-inline-start: var(--gap)
</style>
