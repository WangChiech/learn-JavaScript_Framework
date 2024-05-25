<template>
  <em>
    <slot></slot>
  </em>
</template>
<script setup>
import { 
  onMounted, onUnmounted, onActivated, onDeactivated, 
  onBeforeMount, onBeforeUpdate, useSlots
} from 'vue';

const props = defineProps({
  nameId: String
})
const slots = useSlots()

console.log(slots)
onMounted(() => {
  console.log('ListItem Mounted', props.nameId)
})
onUnmounted(() => {
  console.log('unMounted', props.nameId)
})
onActivated(() => {
  console.log('onActivated', props.nameId)
})
onDeactivated(() => {
  console.log('onDeactivated', props.nameId)
})
onBeforeMount(() => {
  console.log('onBeforeMount', props.nameId)
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate', props.nameId)
})
</script>