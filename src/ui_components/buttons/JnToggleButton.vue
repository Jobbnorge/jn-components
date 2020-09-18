<template>
  <div role="button" @click="isActive = !isActive" :class="{active: isActive}">
    <FontAwesomeIcon :icon="isActive ? iconActive : iconInactive" v-if="placement ==='left'" />
    <slot></slot>
    <FontAwesomeIcon :icon="isActive ? iconActive : iconInactive" v-if="placement === 'right'" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";

fontAwesomeConfig.autoAddCss = false;

export default {
  name: "JnToggleButton",
  components: {
    FontAwesomeIcon,
  },
  props: {
    iconActive: {
      required: true,
      type: Object,
    },
    iconInactive: {
      required: true,
      type: Object,
    },
    /**
     * Kan settes til 'left' eller 'right'
     */
    placement: {
      type: String,
      default: "left",
      validator: (val) => ["left", "right"].indexOf(val) != -1,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style scoped>
.active {
  color: #d41472;
  font-weight: 600;
}
.svg-inline--fa {
  width: 18px;
  height: 18px;
  display: inline-block;
  margin: 0rem 0.5rem 0rem 0.5rem;
}
</style>