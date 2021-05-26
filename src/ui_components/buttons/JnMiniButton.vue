<template>
  <button
    type="button"
    class="btn"
    :style="{ color: computedTextColorStyle }"
    v-bind:class="{ 'show-bg': showBackground, animate: hasAnimation }"
    @click="$emit('mini-button-clicked')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
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
    }
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
