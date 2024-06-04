<template>
  <div id="appId" ref="appRef">
    <ListItem id="listId" ref="listRef" list="listattr"></ListItem>
    <OptionItem id="optionId" ref="optionRef" option="option"></OptionItem>
    <div>
      <button @click="consoleRef">ref</button>
      <button @click="consoleApp">AppIns</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import ListItem from './ListItem.vue';
import OptionItem from './OptionItem.vue';

const listRef = ref()
const optionRef = ref()
const appRef = ref()

const consoleRef = () => {
  console.log('listRef', listRef.value, Reflect.ownKeys(listRef.value))
  console.log('optionRef', optionRef.value, Reflect.ownKeys(optionRef.value))
}
const consoleApp = () => {
  console.log('appIns', appRef, appRef.value.__vueParentComponent)
}
</script>