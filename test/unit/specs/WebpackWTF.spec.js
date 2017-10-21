import Vue from 'vue'
import WebpackWTF from '@/components/WebpackWTF'

describe('WebpackWTF.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(WebpackWTF)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent).to.equal('')
    expect(vm.$el.querySelector('.link').textContent).to.equal(
      'WTF is Webpack ?'
    )
  })
})
