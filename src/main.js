import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import $ from "jquery"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/css/bootstrap_limitless.css'
import './../assets/css/Jobbadmin_responsive.css'
import VueI18n from 'vue-i18n'

//Font-awesome stuff 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
  faUserSecret, 
  faUserPlus, 
  faComments, 
  faExternalLink, 
  faChevronRight, 
  faFileAlt,
  faSortNumericUp,
  faSortNumericDownAlt,
  faEraser
} from '@fortawesome/pro-light-svg-icons';
import {
  faSquare
} from '@fortawesome/free-regular-svg-icons';

import { 
  faBullseye,
  faThumbsUp,
  faThumbsDown
} from '@fortawesome/pro-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core'

//Importing Vue components used in routing
import HorizontalCards from './components/HorizontalCards.vue'
import DialogExample from './components/DialogExample.vue'
import LocaleDemo from './components/LocaleDemo.vue'
import JnCardCtn from './components/JnCardCtn.vue'
import ListElementDemo from './components/ListElementDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import JnCardMiniCtn from './components/JnCardMiniCtn'
import TaskListDemo from './components/TaskListDemo.vue'
import BoardExample from './components/BoardExample.vue'
import AsessmentExample from './components/AsessmentExample.vue'

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
    { path: '/board', component: BoardExample },
    { path: '/assessment', component: AsessmentExample }
  ]
});


Vue.use(VueI18n)

library.add(
  faBullseye,
  faUserSecret, 
  faUserPlus, 
  faComments, 
  faExternalLink, 
  faChevronRight, 
  faFileAlt,
  faSquare,
  faSortNumericUp,
  faSortNumericDownAlt,
  faEraser,
  faThumbsUp,
  faThumbsDown
)

Vue.component('fa-icon', FontAwesomeIcon)

const i18n = new VueI18n({
  locale: 'ja', // set locale
})

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
