<template>
  <button
    type="button"
    class="btn"
    :style="{ color: computedTextColorStyle }"
    v-bind:class="{ 'show-bg': showBackground, animate: hasAnimation }"
    @click="$emit('mini-button-clicked')"
  >
    <FontAwesomeIcon v-if="icon" :icon="icon" class="icon" />
    <slot></slot>
  </button>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
fontAwesomeConfig.autoAddCss = false;
export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    colorTheme: {
      type: String,
      default: "gray",
      validator: function(value) {
        return ["blue", "pink", "gray", "green"].indexOf(value) !== -1;
      },
    },
    showBackground: {
      type: Boolean,
      default: false,
    },
    hasAnimation: {
      type: Boolean,
      default: false,
    },
    icon: Object
  },
  computed: {
    computedTextColorStyle: function() {
      var colors = {
        green: "#1D764F",
        blue: "#127DAC",
        gray: "#44303C",
        pink: "#D41472",
      };
      return colors[this.colorTheme];
    },
  },
};
</script>

<style scoped>
.icon {
  width: 14px;
  height: 14px;
  display: inline-flex;
  margin-right: 6px; 
}
button:hover,
button:focus,
button:active {
  text-decoration: underline;
}
.show-bg:hover,
.show-bg:focus,
.show-bg:active {
  background-color: rgba(68, 48, 60, 0.102);
  text-decoration: none;
}
</style>
