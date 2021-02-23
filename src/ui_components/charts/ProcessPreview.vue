<template>
    <div class="wrapper">
        <JnBadge :colorClass="colorTheme" hasBorder>
        <slot name="content"></slot>
        </JnBadge>
        <FontAwesomeIcon v-if="(showArrow)" :icon="faArrowCircleRight" :style="{ color: computedTextColorStyle}"  />
    </div>
</template>
<script>
import JnBadge from "../misc/JnBadge.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { faArrowCircleRight } from "@fortawesome/pro-regular-svg-icons"; 
fontAwesomeConfig.autoAddCss = false;

export default {
  components: {
    JnBadge,
    FontAwesomeIcon
  },
  props: {
    showArrow: Boolean,
    colorTheme: {
      type: String,
      default: "blue",
      validator: function (value) {
        return ["blue", "pink", "gray", "green"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    computedTextColorStyle: function () {
      var colors = {'green': '#1D764F', 'blue': '#127DAC', 'gray': '#44303C', 'pink': '#D41472'}
      return colors[this.colorTheme]; 
    }
  },
  data() {
    return {
      faArrowCircleRight
    }
  },
}
</script>
<style scoped>
.svg-inline--fa {
  width: 1.7rem;
  height: 1.7rem;
  display: inline-flex;
  margin-left: 0.5rem; 
  background-color: transparent; 
  border: none; 
}
</style>