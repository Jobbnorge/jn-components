import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import $ from "jquery"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/css/bootstrap_limitless.css'
import './../assets/css/Jobbadmin_responsive.css'
import VueI18n from 'vue-i18n'
import './Jn_fontawesome.js'


//Importing Vue components used in routing
import HorizontalCards from './components/HorizontalCards.vue'
import DialogExample from './components/DialogExample.vue'
import LocaleDemo from './components/LocaleDemo.vue'
import JnCardCtn from './components/JnCardCtn.vue'
import ListElementDemo from './components/ListElementDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import JnCardMiniCtn from './components/JnCardMiniCtn'
import TaskListDemo from './components/TaskListDemo.vue'
import AssessmentExample from './components/AssessmentExample.vue'
import InfoCardDemo from './components/InfoCardDemo'
import JnUserMessageDemo from "./components/JnUserMessageDemo"; 

window.$ = $;
window.Vue = Vue;

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/jn-components',
  mode: 'history',
  routes: [
    { path: '/horizontal', component: HorizontalCards },
    { path: '/dialog', component: DialogExample },
    { path: '/locale', component: LocaleDemo },
    { path: '/card-container', component: JnCardCtn },
    { path: '/lists', component: ListElementDemo },
    { path: '/buttons', component: ButtonDemo },
    { path: '/mini-card', component: JnCardMiniCtn },
    { path: '/tasklist', component: TaskListDemo },
    { path: '/assessment', component: AssessmentExample },
    { path: '/info-card', component: InfoCardDemo },
    { path: '/user-message', component: JnUserMessageDemo }
  ]
});


Vue.use(VueI18n)


const i18n = new VueI18n({
  locale: 'ja', // set locale
})

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
