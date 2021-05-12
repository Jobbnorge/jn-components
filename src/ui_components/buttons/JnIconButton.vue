<template>
  <button
    type="button"
    class="btn icon-button"
    v-bind:class="{animate: hasAnimation}"
    @click="$emit('itemClicked')"
  >
    <FontAwesomeIcon :icon="icon" />
  </button>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";

fontAwesomeConfig.autoAddCss = false;

export default {
  name: "JnIconButton",
  components: {
    FontAwesomeIcon,
  },
  props: {
    icon: {
      required: true,
      type: Object,
    },
    hasAnimation: Boolean,
  },
};
</script>
<style scoped>
.icon-icon-button {
  background: none;
  border: none;
  padding: 0.625rem 0.5rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #44303c;
}
.icon-button:link .icon-button:visited .icon-button:hover .icon-button:active {
  color: #44303c;
}
.icon-button:hover {
  outline: none;
  background-color: rgba(68, 48, 60, 0.2);
  border-radius: 3px;
}
.svg-inline--fa {
  width: 18px;
  height: 18px;
  display: inline-block;
}
.btn {
    color: inherit;
    text-transform: none;
    box-shadow: none !important;
    font-size: 0.8125rem;
    cursor: pointer;
    text-decoration: none;
}
</style>