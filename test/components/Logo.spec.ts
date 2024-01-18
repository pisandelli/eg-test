import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import CLogo from '@/components/Logo/Logo.vue'

describe('Mount component', () => {
  it('Mount CLogo', () => {
    const component = mount(CLogo)
    expect(component.vm).toBeTruthy()
  })
})
