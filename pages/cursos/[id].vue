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
      CBreadcrumbs(id='234')
      StackL(compact)
        h2.title Formação Frontend - Básico ao Avançado (2023)
        small Criado por Matt Murdock
        p.description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta exercitationem facere placeat aliquam corrupti totam blanditiis, vero maiores nostrum fugit. Id molestias ex reprehenderit quas deleniti. Non, nihil porro!
      ClusterL.rates(narrow)
        CRating(:rating='4.3')
        small: NuxtLink.reviews(to='#' title='Reviews') (456.989)
  BoxL(borderless sharp)
    p Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ea. Minima quidem rem culpa in mollitia ipsam et dolorum repellendus a! Aspernatur eveniet obcaecati blanditiis quis accusamus tempore esse sed?
BoxL.sidebar
  p sidebar
</template>

<style lang="stylus" scoped>
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

.description
  font-size: calc(var(--font-size-base) + .2rem)
</style>
