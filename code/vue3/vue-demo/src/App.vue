<template>
  <div id="appId" ref="appRef">
    <SubApp :msg></SubApp>
    <div class="btn">
      <button @click="msg.val++">msg++</button>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import SubApp from './SubApp.vue'

const msg = reactive({val: 1})

</script>