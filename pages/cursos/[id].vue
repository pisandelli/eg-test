<script lang="ts" setup>
/**
 * Página com detalhes do curso.
 * @name 'Curso'
 * @version 1.0.0
 */

// GET Courses Store
import { storeToRefs } from 'pinia'
import { useCoursesStore } from '~/store/CoursesStore'
const courseStore = useCoursesStore()

// Courses States
const { course, isLoading } = storeToRefs(courseStore)

// Fetch all courses data
onMounted(async () => {
  const route = useRoute()
  await courseStore.fetchCourseById(+route.params.id)
})

const { data } = await useAsyncData('doc', () => {
  return queryContent('/cursos').findOne()
})

// Use 2 columns layout
definePageMeta({
  layout: 'two-col-right'
})

</script>

<template lang="pug">
CLoading(v-if='isLoading')
BoxL.content(v-else compact)
  BoxL.banner(borderless sharp)
    StackL
      CBreadcrumbs(:name='course.name')
      StackL(compact)
        h1.title {{ course.name }}
        small Criado por {{ course.author }}
        p.short-description {{ course.short_description }}
      ClusterL.rates(narrow)
        CRating(:rating='course.user_rate')
        small: NuxtLink.reviews(to='#' title='Reviews') {{'(' + course.reviews + ')'}}
  BoxL(borderless sharp)
    BoxL(sharp)
      CSection(title='Você aprenderá' tag='h3')
        StackL
          StackL.features(compact tag='ul')
            template(v-for='feature in data.features' :key='feature')
              li.item
                icon(name='ion:checkmark-circle-outline')
                span {{ feature }}
          CenterL
            CButton.cta(tag='a' to='#' accent pill) Matricule-se agora
    StackL
      section.description
        ContentRenderer(:value='data')
          ContentRendererMarkdown(:value="data")
      section.syllabus
        h2 Ementa
        CSyllabus(:data='course.syllabus')

      CenterL
        CButton.cta(tag='a' to='#' accent pill) Matricule-se agora

BoxL.sidebar(v-if='!isLoading')
  h3.sidebar__header Mais informações

  ul.info__list
    li.info__item
      icon(name='ion:checkmark-circle-outline')
      span  Cras tempus mauris eget

    li.info__item
      icon(name='ion:checkmark-circle-outline')
      span  Vestibulum id purus iaculis

    li.info__item
      icon(name='ion:checkmark-circle-outline')
      span  Orci varius natoque penatibus

  CenterL(tag='section' intrinsic)
    CButton.cta(tag='a' to='/cursos' small pill) Outros Cursos
</template>

<style lang="stylus" scoped>
.features
  list-style-type: none
  display: block
  height: 9rem
  columns: 2
  column-gap: var(--s4)

.item
  display: flex
  align-items: center
  gap: .5rem

.icon
  font-size: 1.2rem
  color: var(--color-success)
.title
  font-size: var(--font-size-huge)
  font-weight: var(--weight-bold)
  color: var(--color-primary)
.banner
  background-color: var(--color-primary-light)
.rates
  --star-color: #FFF
  --star-background: var(--color-accent)
.sidebar
  _box-shadow()

  &__header
    font-size: 1.3rem

.info
  &__list
    margin-block: 1rem
    list-style-type: none
  &__item
    padding-block: 1rem

.short-description
  font-size: calc(var(--font-size-base) + .2rem)

.description
  padding-block: var(--s2)
  :deep(h2)
    font-size: var(--font-size-huge)
    font-weight: var(--weight-bold)
    color: var(--color-default)
    padding-block-end: var(--s1)
    a
      text-decoration: none

.syllabus h2
  font-size: var(--font-size-huge)
  font-weight: var(--weight-bold)
  color: var(--color-default)
  margin-block-end: var(--gap)
</style>
