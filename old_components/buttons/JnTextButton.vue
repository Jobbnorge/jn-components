<template>
  <a class="button" role="button" :href="url" :id="id" @click="$emit('txtBtnClicked')">
    <slot></slot>
    <FontAwesomeIcon :icon="icon" />
  </a>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/pro-light-svg-icons";

fontAwesomeConfig.autoAddCss = false;

export default {
  name: "JnTextButton",
  components: {
    FontAwesomeIcon,
  },
  props: {
    url: String,
    id: String,
    icon: {
      type: Object,
      default: () => faChevronRight,
    },
  },
};
</script>

<style scoped>
a.button {
  background: none;
  border: none;
  padding: 0.625rem 0.5rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #44303c;
  cursor: pointer;
}
svg {
  margin-left: 0.5rem;
}
a.button:link a.button:visited a.button:hover a.button:active {
  color: #44303c;
}
a.button:hover {
  outline: none;
  background-color: rgba(68, 48, 60, 0.2);
  border-radius: 3px;
}
.svg-inline--fa {
  width: 18px;
  height: 18px;
  display: inline-block;
}
</style>