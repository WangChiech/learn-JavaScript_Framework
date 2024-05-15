import Vue from 'vue'

new Vue({
  template: '<h1 @click="handleChangeH">{{ msg }}</h1>',
  data: {
    msg: 'hellp'
  },
  methods: {
    handleChangeH() {
      this.msg = 'hello'
    }
  }
}).$mount('#app')