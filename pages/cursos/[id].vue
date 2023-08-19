<script lang="ts" setup>
/**
 * Página com detalhes do curso.
 * @name 'Curso'
 * @version 1.0.0
 */
definePageMeta({
  layout: 'two-col'
})
</script>

<template lang="pug">
h1 CURSO {{ $route.params.id }}
</template>

<style lang="stylus" scoped></style>
