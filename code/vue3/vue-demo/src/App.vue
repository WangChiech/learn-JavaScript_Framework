<template>
  <ListItem>11</ListItem>
  <!-- <KeepAlive>
    <ListItem nameId="1" v-if="act === 1">
      <h1>11</h1>
      <h2>22</h2>
    </ListItem>
    <ListItem nameId="2" v-else-if="act ===2">
      <h1>11</h1>
    </ListItem>
    <ListItem nameId="3" v-else>
      <h1>11</h1>
    </ListItem>
  </KeepAlive> -->
</template>

<script setup>
// import { ref } from 'vue'
import ListItem from './ListItem.vue'
// console.log(ListItem)
// const act = ref(1)
// document.body.onclick = function () {
//   console.log('body click', act.value)
//   if (act.value > 0 && act.value < 3) {
//     act.value++
//   } else {
//     act.value--
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
