import Vue from 'vue'

new Vue({
  el: '#app',
  template: '<h1>{{ msg }}</h1>',
  data: {
    msg: 'hellp'
  }
}).$mount('#app')