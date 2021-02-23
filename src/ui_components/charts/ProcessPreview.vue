<template>
  <div class="pp-wrapper">
    <div v-for="step in steps" :key="step.title">
        <JnBadge :colorClass="colorTheme" hasBorder>
        <FontAwesomeIcon v-if="flagIcon" :icon="mapFlagToIcon(step.flag)" :class="['step-icon', 'icon']"  />
        <span>{{ step.title }}</span>
        </JnBadge>
        <FontAwesomeIcon v-if="(showArrow && steps.indexOf(step) < steps.length-1)" :icon="faArrowCircleRight" :style="{ color: computedTextColorStyle }"  />
    </div>
  </div>
</template>
<script>
import JnBadge from "../misc/JnBadge.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { faArrowCircleRight } from "@fortawesome/pro-regular-svg-icons"; 
import { faThumbsUp, faThumbsDown, faCommentsAlt, faMedal, faHandshakeAlt} from "@fortawesome/pro-light-svg-icons";
fontAwesomeConfig.autoAddCss = false;

export default {
  components: {
    JnBadge,
    FontAwesomeIcon
  },
  props: {
    steps: Array,
    showArrow: Boolean,
    flagIcon: Boolean,
    colorTheme: String,
    /* 'green', 'blue', 'gray', 'pink'  */
  },
  computed: {
    computedTextColorStyle: function () {
      var colors = {'green': '#1D764F', 'blue': '#127DAC', 'gray': '#44303C', 'pink': '#D41472'}
      return colors[this.colorTheme]; 
    }
  },
  data() {
      return {
          faArrowCircleRight,
          faThumbsUp,
          faThumbsDown,
          faCommentsAlt,
          faMedal,
          faHandshakeAlt

      }
  },
  methods: {
      mapFlagToIcon(flag) {
          
          if(flag !=null) {
            switch(Object.keys(flag)[0]) {
                case "isQualified":
                    return Object.values(flag)[0] ? this.faThumbsUp : this.faThumbsDown; 
                case "hasInterview":
                    return Object.values(flag)[0] ? this.faCommentsAlt : "";
                case "priorityJustification":
                    return faMedal;
                case "isHired":
                    return Object.values(flag)[0] ? this.faHandshakeAlt : ""; 
            
            }
          }
      }
  }
};
</script>
<style scoped>
.pp-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; 
}
.svg-inline--fa {
  width: 1.7rem;
  height: 1.7rem;
  display: inline-block;
  margin-left: 0.5rem;
  background-color: transparent; 
  border: none; 
}
.step-icon {
    width: 1rem;
    height: 1rem; 
    margin-left: 0rem;
    margin-right: 0.5rem; 
}
</style>