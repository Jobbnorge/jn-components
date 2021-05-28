import Vue from 'vue'
import App from './App.vue'
import './../assets/css/bootstrap_limitless.css'
import './../assets/css/bootstrap.min.css'
import './../assets/css/Jobbadmin_responsive.css'
import '@fortawesome/fontawesome-pro/css/all.min.css'
import VueI18n from 'vue-i18n'

window.Vue = Vue;

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'ja'
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
