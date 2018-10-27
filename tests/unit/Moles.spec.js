import { mount } from '@vue/test-utils';
import Moles from '@/Moles.vue';

describe('Moles', () => {

  const propsData = {
    'moleData': [false, false, false, false],
    'gameActive': false
  };
  const wrapper = mount(Moles, { propsData });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('should have props data', () => {
    expect(wrapper.props()).toEqual(propsData);
  })

  describe('methods', () => {
    it('handleWhack', () => {
      wrapper.vm.handleWhack('1');
      expect(wrapper.emitted('whack')).toBeTruthy();
      expect(wrapper.emitted('whack')[0][0]).toEqual('1');
    })
  })

  describe('computed', () => {
    it('classNames', () => {
      expect(wrapper.vm.classNames).toEqual({
        'moles-container': true, // 必ず表示する
        'game-active': propsData.gameActive, // ゲームが遊ばれている時だけ
      });
    });
  });
});
