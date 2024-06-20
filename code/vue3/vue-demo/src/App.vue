<template>
  <div id="appId" ref="appRef">
    <SubApp :msg></SubApp>
    <div class="btn">
      {{msg.val}}
      <!-- <button @keyup.enter="msg.val++">msg++</button> -->
      <input @keyup.enter="msg.val++"/>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import SubApp from './SubApp.vue'

const msg = reactive({val: 1})

</script>