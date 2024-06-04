<template>
  <div :mode="listData">
    listItem-{{count}}
    <button @click.self="$emit('update:title', title + 1)">+</button>
    <button @click="console.dir(this)">this</button>
    <!-- <OptionItem ref="listopt"></OptionItem> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      listData: 3
    }
  },
  setup() {
    console.log('++++++setup')
    return {
      setupData: 22
    }
  }
}
</script>
<script setup>
// import OptionItem from './OptionItem.vue'
import { ref, useAttrs, watch } from 'vue'
    const count = ref(1)
debugger
watch(count, () => {
  console.log('watch')
  // debugger
})
setTimeout(() => {
  count.value++
})
// console.log('----', useAttrs())
// defineModel('title')
// defineProps([
//   'Aa'
// ])
// defineEmits(['update:title'])
  // const emit = defineEmits([])
  // console.dir(emit)
  // const [mode, cap] = defineModel('title', {
  //   set(a, b, c) {
  //     console.log('--set', a, b, c)
  //     // return a
  //   },
  //   get(a, b, c) {
  //     console.log('--get', a, b, c)
  //     return a
  //   }
  // })
  // console.log(mode, cap)
  // console.log('title--', title, titleModifiers)
    // const handleClick = () => count.value++
    // defineExpose({ count })
</script>