<script lang="ts" setup>
/**
 * Index Page.
 * @name 'PageIndex'
 * @version 1.0.0
 */

// Reset the error and try
// to navigate to home page
function resetError(error: { value: null }) {
  error.value = null
  navigateTo('/')
}
</script>

<template lang="pug">
StackL(wide)
  div
    WHero
    WTrusted
  CSection.new(title='Destaques' tag='h2')
    //- Catching up any errors and show to the user
    //- This could be improved with better UI and options
    NuxtErrorBoundary
      template(#error="{error}")
        BoxL
          StackL.error(compact)
            h1.title Desculpe, algo deu errado!
            p {{  error }}
            CButton(type='button' accent value='Tentar novamente' @click='resetError(error)' pill small) Tentar novamente
            a(href='#') Fale com nosso suporte
      WTabs

</template>

<style lang="stylus" scoped>
.title
  font-size: var(--font-size-bigger)
  color: var(--color-danger)
</style>
