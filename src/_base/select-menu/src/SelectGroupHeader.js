import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'NBaseSelectGroupHeader',
  props: {
    tmNode: {
      type: Object,
      required: true
    }
  },
  render () {
    const {
      tmNode: { rawNode }
    } = this
    const children = rawNode.render ? [rawNode.render(rawNode)] : [rawNode.name]
    return h(
      'div',
      {
        class: 'n-base-select-group-header'
      },
      children
    )
  }
})
