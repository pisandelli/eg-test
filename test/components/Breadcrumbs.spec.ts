import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import CBreadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue'

describe('Breadcrumbs', () => {
  it('id is string', async () => {
    const component = mount(CBreadcrumbs)
    await component.setProps({ slug: '11' })
    expect(component.html()).toContain('11')
  })
})
