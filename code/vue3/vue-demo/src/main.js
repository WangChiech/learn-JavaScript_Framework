import * as Vue from 'vue'
import App from './App.vue'



const app = Vue.createApp(App)
console.log('app', app)

const Ac = app.component('AComp', <App></App>)
const Ac1 = app.component('AComp1', <App></App>)

app.mount('#app')
