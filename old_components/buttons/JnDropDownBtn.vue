<template>
  <div class="dropdown">
    <button
      class="btn-drop dropdown-toggle"
      data-toggle="dropdown"
      id="dropdownMenuButton"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <FontAwesomeIcon v-if="icon" :icon="icon" />
      {{text}}
    </button>
    <div class="dropdown-menu">
      <ul v-if="type === 'event'">
        <li
          class="dropdown-item"
          v-for="(option,x) in options"
          :key="x"
          @click="$emit('itemClicked', option )"
        >{{option.text}}</li>
      </ul>
      <a
        v-else
        class="dropdown-item"
        v-for="(option,x) in options"
        :key="x"
        :href="option.url"
      >{{option.text}}</a>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";

fontAwesomeConfig.autoAddCss = false;

export default {
  name: "JnDropDownBtn",
  components: {
    FontAwesomeIcon,
  },
  props: {
    text: String,
    icon: Object,
    type: String,
    options: Array,
  },
  created() {
      console.info(this.icon)
  }
};
</script>

<style scoped>
.btn-drop {
  background: none;
  border: none;
  color: #44303c;
  padding-bottom: 2px;
  box-sizing: border-box;
}
.btn-drop:focus {
  outline: none;
  padding-bottom: 0px;
  border-bottom: 2px solid rgb(127, 255, 199);
}
ul {
  list-style: none;
  padding: 0;
}
.svg-inline--fa {
  width: 18px;
  height: 18px;
  display: inline-block;
  margin-right: 2px;
}
</style>