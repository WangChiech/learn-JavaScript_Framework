import { ref } from 'vue';
<template>
  <div class="optdiv">
    <slot></slot>
    <button @click="handleM">opt</button>
    <ListItem ref="optList"></ListItem>
  </div>
</template>
<script>
import { ref } from 'vue'
import ListItem from './ListItem.vue';
export default {
  components: { ListItem },
  props: ['optProps'],
  expose: [],
  setup() {
    const optCount = ref(0)
    return {
      optCount
    }
  },
  beforeCreate() {
    console.log(this)
    // debugger
  },
  data () {
    return {
      optmsg: 'optmsg'
    }
  },
  methods: {
    handleM() {
      console.dir(this)
    }
  }
}
</script>