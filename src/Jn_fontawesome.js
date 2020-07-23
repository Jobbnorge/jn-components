import Vue from 'vue'
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
  faEraser,
  faCalendarAlt,
  faClock,
  faChevronUp,
  faChevronDown,
  faEnvelope,
  faPhone,
  faBriefcase,
  faInfoCircle,
  faDownload,
  faCheck,
  faUserCircle,
  faPassport,
  faCheckCircle,
  faHome,
  faUserLock
} from '@fortawesome/pro-light-svg-icons';

import { 
  faBullseye,
  faThumbsUp,
  faThumbsDown,
  faCircle,
  faTimes
} from '@fortawesome/pro-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
    faBullseye,
    faUserSecret, 
    faUserPlus, 
    faComments, 
    faExternalLink, 
    faChevronRight, 
    faFileAlt,
    faSortNumericUp,
    faSortNumericDownAlt,
    faEraser,
    faThumbsUp,
    faCalendarAlt,
    faClock,
    faThumbsDown,
    faChevronUp,
    faChevronDown,
    faCircle,
    faEnvelope,
    faPhone,
    faCalendarAlt,
    faBriefcase,
    faTimes,
    faInfoCircle,
    faDownload,
    faCheck,
    faUserCircle,
    faPassport,
    faCheckCircle,
    faHome,
    faUserLock



  )
  
  Vue.component('fa-icon', FontAwesomeIcon)

