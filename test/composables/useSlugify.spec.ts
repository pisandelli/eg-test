import { it, expect, describe } from 'vitest'
import { useSlugify } from 'composables/useSlugify'

describe('useSlugify', () => {
  it('slugify string', () => {
    const string = 'Doce de banana e mamão'
    const slug = useSlugify(string)

    expect(slug).toBe('doce-de-banana-e-mamao')
  })

  it('slugify number', () => {
    const string = 10
    const slug = useSlugify(string)

    expect(slug).toBe('10')
  })
})
