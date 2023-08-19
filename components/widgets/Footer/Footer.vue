<script lang="ts" setup>
/**
 * Main footer.
 * @name 'widgets-footer'
 * @alias 'WFooter'
 * @version 1.0.0
 * @example
 * <WFooter></WFooter>
 */

const footerMenu = [
  {
    label: 'Todos os cursos',
    url: '#'
  },
  {
    label: 'Dúvidas frequentes',
    url: '#'
  },
  {
    label: 'Suporte Premium',
    url: '#'
  },
  {
    label: 'Carreiras',
    url: '#'
  },
  {
    label: 'Cursos em destaque',
    url: '#'
  },
  {
    label: 'Seja um instrutor',
    url: '#'
  },
  {
    label: 'Planos e preços',
    url: '#'
  },
  {
    label: 'Política de privacidade',
    url: '#'
  },
  {
    label: 'Trilha Backend',
    url: '#'
  },
  {
    label: 'Trilha Frontend',
    url: '#'
  },
  {
    label: 'Trilha Fullstack ',
    url: '#'
  },
  {
    label: 'Trilha Gestão de TI',
    url: '#'
  }
]

const now = useDateFormat(useNow(), 'YYYY')
</script>

<template lang="pug">
footer.footer
  StackL
    BoxL(borderless transparent)
      StackL(wide)
        .header
            ClusterL(between)
              CLogo.logo
              ClusterL(narrow)
                h3 Nós treinamos
                CCompanies.companies
        .body
          ClusterL(tag='section' between)
            CNavigation.footer-menu(:stack='true' :data='footerMenu')
            .gap
              CenterL
                StackL.info
                  p Aenean eleifend ac sapien ac mollis. Vestibulum in lectus ante. Nunc fringilla, ex nec viverra posuere, nibh nulla euismod justo, in semper tellus purus non ipsum.
                  ClusterL
                    CButton.cta(tag='a' to='/' accent pill) Matricule-se agora
                    p(class='text:bold') São mais de 700 cursos e seminários
        .disclaimer
          ClusterL(between)
            p &copy; Todos os direitos reservados - {{ now }}
            ClusterL
              NuxtLink(to='#') Politica de privacidade
              NuxtLink(to='#') Termos de uso

</template>

<style lang="stylus" scoped>
.footer
  margin-block-start: calc(var(--gap) * 2)
  padding: var(--gap)
  background-color: var(--color-primary)

  & * + *
    color: var(--color-neutral)

.logo
  inline-size: 8rem

.companies
  --color-symbol: var(--color-neutral)

.footer-menu
  display: block
  height: 9rem
  columns: 2
  column-gap: var(--s4)

:deep(.anchor)
  text-decoration: none

  &:is(:hover, :focus)
    text-decoration: underline

.disclaimer
  padding-block-start: var(--gap)
  border-top: 1px solid #FFFFFF40

.gap
  --max-width: 75ch
  inline-size: 50%
.info
  font-size: var(--font-size-big)
  font-weight: var(--weight-light)
  max-inline-size: var(--max-text-width)
</style>
