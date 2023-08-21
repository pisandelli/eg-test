<!-- eslint-disable space-before-function-paren -->
<script lang='ts' setup>
/**
 * Accordion Component
 * to render the Syllabus.
 * @name 'c-syllabus'
 * @alias 'CSyllabus'
 * @version 1.0.0
*/

import type SyllabusTypes from '~/interfaces/api/SyllabusTypes'

defineProps<{
  data: SyllabusTypes[]
}>()

// Active panel
const active = ref(null as number | null)

// Change the active panel
function checkActive(id: number) {
  if (active.value === id) {
    active.value = null
  } else {
    active.value = id
  }
}

// Check if Class is video or document
function checkClasseIcon(type: string) {
  if (type === 'doc') {
    return 'ion:document-text-outline'
  } else if (type === 'video') {
    return 'ion:play-circle-outline'
  }
}
</script>

<template lang="pug">
StackL(squeezed)
  BoxL(compact sharp)
    template(v-for="syll in data" :key='syll.id')
      BoxL.header(borderless sharp @click='checkActive(syll.id)')
        h4.name {{ syll.name }}
      BoxL.classes(borderless sharp compact :class='{show: active === syll.id}')
        StackL.class__list(tag='ul' squeezed)
          template(v-for="classe in syll.classes")
            ClusterL.item(tag='li' between)
              div.item__link
                icon(:name='checkClasseIcon(classe.asset_type)')
                NuxtLink(:to="'/class/' + classe.id") {{ classe.name }}
              span {{ classe.duration }}
</template>

<style lang="stylus" scoped>
.header
  background: var(--color-grey-light)
  cursor: pointer
  &:not(:last-child)
    border-bottom: 1px solid #DDD

.name
  font-size: 1.2rem
  font-weight: var(--weight-bold)

.classes
  display: none
  &.show
    display: flex

.class__list
  inline-size: 100%
  list-style-type: none

.item
  padding: var(--gap)
  &:is(:hover, :focus)
    background-color: var(--color-primary-light)

  &__link
    display: flex
    align-items: center
    gap: .5rem
    font-size: 1.1rem

    a
      text-decoration: none

      &:is(:hover, :focus)
        color: var(--color-accent)

</style>
