<template>
  <transition name="fade" mode="out-in">
    <div v-show="!isClosed" :class="['box', colorTheme, { solid: solid }]">
      <span
        v-if="canClose"
        class="icon animate"
        @click="$emit('info-box-closed', $event)"
      >
        <span
          class="fas fa-times close-icon"
          :style="{ color: computedTextColorStyle }"
        />
      </span>
      <slot name="box-content"></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "InfoBox",
  props: {
    canClose: {
      type: Boolean,
      deafault: false,
    },
    colorTheme: {
      type: String,
      default: "blue",
      validator: function(value) {
        return ["blue", "pink", "gray", "green", "white"].indexOf(value) !== -1;
      },
    },
    solid: {
      type: Boolean,
      default: false,
    },
    isClosed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedTextColorStyle: function() {
      var colors = {
        green: "#1D764F",
        blue: "#127DAC",
        gray: "#44303C",
        pink: "#D41472",
        white: "#44303C",
      };
      return colors[this.colorTheme];
    },
  },
};
</script>

<style scoped>
.box {
  padding: 0.5rem;
  border-radius: 3px;
  min-height: 100px;
  color: var(--gray);
}
.solid {
  border: 1px solid;
}
.icon {
  padding: 0.5rem;
  float: right;
  margin-left: 0.5rem;
}
.close-icon {
  font-size: 1rem;
  background-color: transparent;
  border: none;
  color: inherit;
}
.icon:hover {
  background-color: #fff;
  border-radius: 3px;
  cursor: pointer;
}
.animate {
  transition: all 0.2s ease-in;
}
.animate:hover {
  transform: scale(1.03);
}
.animate:active {
  transform: scale(0.9);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
