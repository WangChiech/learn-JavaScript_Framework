
<script>
import { ref } from 'vue';
export default {
  props: ['obj', 'c'],
  setup(props, ctx) {
    const subAppCount = ref(0)
    // setTimeout(() => props.obj.o.count++, 3000)
    return function () {
      console.log('SubApp render', this, this.$)
      return props.c
    }
  }
}

</script>