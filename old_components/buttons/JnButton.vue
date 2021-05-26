<template>
  <button
    type="button"
    :class="['btn', colorTheme, { light: light }, 'animate']"
    @click="$emit('JnButton-clicked')"
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
      default: "secondary",
      validator: function(value) {
        return ["blue", "pink", "gray", "green", "secondary"].indexOf(value) !== -1;
      },
    },
    light: {
      type: Boolean,
      default: false,
    },
    hasBorder: {
      type: Boolean,
      default: false,
    },
    icon: Object
  },
};
</script>
<style scoped>
button {
  border: 1px solid transparent;
}
button:hover,
button:focus,
button:active {
  filter: brightness(90%); /* 95% coverage unprefixed, caniuse.com  */
}
.secondary {
  background: #fff;
  border: 1px solid var(--gray);
  color: var(--gray);
}
.icon {
  width: 1rem;
  height: 1rem;
  display: inline-flex;
  margin-right: 0.5rem;
}
</style>
