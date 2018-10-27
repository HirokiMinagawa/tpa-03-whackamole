import { mount } from '@vue/test-utils';
import Mole from '@/Mole.vue';

describe('Mole', () => {
  const propsData = {
    'active': true,
    'moleId': '1'
  };
  const wrapper = mount(Mole, { propsData });
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('should have props data', () => {
    expect(wrapper.props()).toEqual(propsData);
  });

  it('template', () => {
    const mock = jest.fn();
    wrapper.setMethods({
      handleClick: mock,
    });
    wrapper.find("img.mole").trigger("click")
    expect(mock).toHaveBeenCalled()
  });

  describe('methods', () => {
    it('handleClick', () => {
      wrapper.vm.handleClick();
      expect(wrapper.emitted('whack')).toBeTruthy();
      expect(wrapper.emitted('whack')[0][0]).toEqual('1');
    });
  });

  describe('computed', () => {
    it('classNames', () => {
      expect(wrapper.vm.classNames).toEqual({
        'mole-container': true, // 必ず表示する
        'active': propsData.active, // モグラが出てる場合
        'inactive': !propsData.active, // モグラが出てない場合
      });
    });
  });
});
