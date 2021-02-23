<template>
  <transition name="fade" mode="out-in">
    <div v-if="!isClosed" :class="['box', colorTheme]">
      <span v-if="canClose" class="icon animate" @click="closeBox()">
        <FontAwesomeIcon :icon="faTimes" class="svg-close-icon" :style="{ color: computedTextColorStyle }" />
      </span>
      <slot name="box-content"></slot>
    </div>
  </transition>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/pro-regular-svg-icons";
fontAwesomeConfig.autoAddCss = false;

export default {
  name: "InfoBox",
  components: {
    FontAwesomeIcon,
  },
  props: {
    canClose: {
      type: Boolean,
      deafault: false,
    },
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
      faTimes,
      isClosed: false,
    };
  },
  methods: {
    closeBox() {
      this.isClosed = !this.isClosed;
    },
  },
};
</script>

<style scoped>
.box {
  padding: 0.5rem;
  border-radius: 3px;
  min-height: 100px;
}
.blue {
  background: #e8f5fa;
  border: 1px dashed #0e6489;
}
.pink {
  background: #ffeef6;
  border: 1px dashed #d41472;
}
.gray {
  background: #f6f5f6;
  border: 1px dashed #44303c;
}
.green {
  background: #d3f5df;
  border: 1px dashed #1d764f;
}
.icon {
  padding: 0.5rem;
  float: right;
}
.svg-close-icon {
  width: 1rem;
  height: 1rem;
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