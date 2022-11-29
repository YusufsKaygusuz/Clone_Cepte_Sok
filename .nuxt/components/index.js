export { default as Footer } from '../..\\components\\footer.vue'
export { default as Kampanya } from '../..\\components\\kampanya.vue'
export { default as Kategoriler } from '../..\\components\\kategoriler.vue'
export { default as Navbar } from '../..\\components\\navbar.vue'
export { default as Slider } from '../..\\components\\slider.vue'
export { default as Slider2 } from '../..\\components\\slider2.vue'
export { default as Urunler } from '../..\\components\\urunler.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
