import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TrueFalseQuestion from '~/components/quiz/TrueFalseQuestion.vue'
import type { TrueFalseQuestion as TF } from '~/content/types'

const question: TF = {
  type: 'tf',
  q: 'Nordic walking angażuje niemal wszystkie mięśnie ciała.',
  correct: true,
  explain: 'Angażuje do 90% mięśni.',
}

describe('TrueFalseQuestion.vue', () => {
  it('renders the question and both options', () => {
    const wrapper = mount(TrueFalseQuestion, {
      props: { question, selected: null, revealed: false },
    })
    expect(wrapper.text()).toContain(question.q)
    const buttons = wrapper.findAll('.tf-btn')
    expect(buttons).toHaveLength(2)
    expect(buttons[0]!.text()).toContain('Prawda')
    expect(buttons[1]!.text()).toContain('Fałsz')
  })

  it('emits the chosen value on click', async () => {
    const wrapper = mount(TrueFalseQuestion, {
      props: { question, selected: null, revealed: false },
    })
    await wrapper.findAll('.tf-btn')[0]!.trigger('click')
    await wrapper.findAll('.tf-btn')[1]!.trigger('click')
    expect(wrapper.emitted('select')).toEqual([[true], [false]])
  })

  it('marks the selected option before reveal', () => {
    const wrapper = mount(TrueFalseQuestion, {
      props: { question, selected: true, revealed: false },
    })
    expect(wrapper.findAll('.tf-btn')[0]!.classes()).toContain('selected')
  })

  it('shows correct/wrong styling and disables buttons after reveal', () => {
    // user picked "Fałsz" (false) but the answer is true
    const wrapper = mount(TrueFalseQuestion, {
      props: { question, selected: false, revealed: true },
    })
    const [truthy, falsy] = wrapper.findAll('.tf-btn')
    expect(truthy!.classes()).toContain('correct')
    expect(falsy!.classes()).toContain('wrong')
    expect(truthy!.attributes('disabled')).toBeDefined()
  })
})
