<script lang="ts" setup>
/**
 * Página com a listagem de todos os cursos.
 * @name 'Cursos'
 * @version 1.0.0
 */
</script>

<template lang="pug">
article.cursos
  StackL(wide)
    CSection(title='Todos os cursos')
      CPageDescription
        p Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur enim inventore optio iste veniam voluptas deleniti suscipit exercitationem possimus veritatis ex, repellendus illum nostrum voluptatum dolores ipsum saepe molestias?

    CSection(title='Trilha Frontend' tag='h3')
      ClusterL(id='trilha-frontend')
        WCard
        WCard
        WCard
        WCard
    CSection(title='Trilha Backend' tag='h3')
      ClusterL(id='trilha-backend')
        WCard
        WCard
        WCard
        WCard
    CSection(title='Trilha Full Stack' tag='h3')
      ClusterL(id='trilha-full-stack')
        WCard
        WCard
        WCard
        WCard
</template>

<style lang="stylus" scoped>
.container
  --max-width: 83.6rem
</style>
