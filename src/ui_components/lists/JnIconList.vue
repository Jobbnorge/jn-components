<template>
  <ul>
    <li v-for="(icon, name, index) in listItems" :key="index">
      <FontAwesomeIcon :icon="icon" />
      {{name}}
    </li>
  </ul>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";

fontAwesomeConfig.autoAddCss = false;

export default {
  name: "JnIconList",
  components: {
    FontAwesomeIcon,
  },
  props: {
    listItems: Object,
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
}
.svg-inline--fa {
  width: 1em;
  height: 1em;
  display: inline-block;
  margin-right: 0.5rem;
}
</style>