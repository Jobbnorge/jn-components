<template>
  <div class="wrapper">
    <JnBadge :colorTheme="colorTheme" hasBorder>
      <span v-if="faClass" :class="['step-icon', 'fal', faClass]" />
      <slot name="content"></slot>
    </JnBadge>
    <span
      v-if="showArrow"
      :class="['fas fa-arrow-circle-right', 'arrow']"
      :style="{ color: computedTextColorStyle }"
    />
  </div>
</template>
<script>
import JnBadge from "../containers/JnBadge.vue";

export default {
  components: {
    JnBadge,
  },
  props: {
    showArrow: Boolean,
    colorTheme: {
      type: String,
      default: "blue",
      validator: function(value) {
        return ["blue", "pink", "gray", "green"].indexOf(value) !== -1;
      },
    },
    faClass: {
      type: String,
    },
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
.arrow {
  font-size: 1.5rem;
  display: inline-flex;
  margin-left: 0.5rem;
  background-color: transparent;
  border: none;
  vertical-align: middle;
}

.step-icon {
  width: 1rem;
  height: 1rem;
  display: inline-flex;
  margin-right: 0.5rem;
  margin-left: 0;
}
</style>
