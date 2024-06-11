import * as Vue from '../../core/packages/vue/dist/vue.runtime.esm-bundler'
import App from './App.vue'

debugger

const app = Vue.createApp(App)
console.log('app', app)

app.mount('#app')
