import { mount } from '@vue/test-utils';
import Counter from '@/Counter.vue';

describe('Counter', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Counter);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('should have props data', () => {
    const propsData = {
      'label': 'hoge',
      'value': 'fuga'
    };
    const wrapper = mount(Counter, { propsData });

    expect(wrapper.props().label).toBe('hoge')
    expect(wrapper.props().value).toBe('fuga')
  })
})
