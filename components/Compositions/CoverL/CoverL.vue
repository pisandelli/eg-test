<script lang="ts">
/**
 * A cover component to keep
 * content centralized
 * @name 'CoverL'
 * @version 1.0.0
 */

import { defineComponent, h } from 'vue'
import Styles from './CoverL.module.styl'

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props, { slots }) {
    return () => h(props.tag, { class: Object.values(Styles) }, slots)
  }
})
</script>
