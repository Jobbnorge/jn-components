<template>
  <div>
    <div class="drop-container">
      <button
        class="btn icon-button"
        v-bind:class="{ bg: isPrimary, 'border-blue': showOptions }"
        @click="showOptions = !showOptions"
      >
        {{ text }}
        <FontAwesomeIcon
          :icon="dropUp ? faChevronUp : faChevronDown"
          v-bind:class="{'fa-rotate-180': showOptions}"
        />
      </button>
    </div>
    <div class="drop-items" ref="drop" v-if="showOptions" v-bind:style="calculatePosition">
      <ul>
        <li
          v-for="option in options"
          :key="option.id"
          @click="$emit.event('item-clicked', option)"
        >
          {{ option.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/pro-light-svg-icons";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";

fontAwesomeConfig.autoAddCss = false;

export default {
  name: "JnDropDownBtn",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faChevronDown,
      faChevronUp,
      showOptions: false,
      offsetHeight: 0
    };
  },
  props: {
    text: String,
    isPrimary: Boolean,
    dropUp: {
      type: Boolean,
      default: false,
    },
    options: Array,
  },
  mounted() {
    this.offsetHeight = this.document.getElementByClassName("drop-items").offsetHeight
  }, 
  computed: {
    calculatePosition() {
      console.log(this.offsetHeight); 
      return {
        position: "relative",
        bottom: `px` 
      }
    }
  },
};
</script>

<style scoped>
.bg {
  background: #e8f5fa;
}
.border-blue {
  border: 1px solid var(--blue);
}
.icon-button
  .icon-button:link
  .icon-button:visited
  .icon-button:hover
  .icon-button:active {
  color: #44303c;
}
.icon-button:hover {
  background: #e8f5fa;
}
.btn {
  color: inherit;
  text-transform: none;
  box-shadow: none !important;
  font-size: 0.8125rem;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid transparent;
}
.drop-items {
  background: #ffffff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  width: 200px;
}
li {
  padding: 0.5rem;
  cursor: pointer;
}
li:hover {
  background: #ccc;
}
ul {
  list-style: none;
  padding: 0;
}
.svg-inline--fa {
  width: 18px;
  height: 18px;
  display: inline-block;
  margin: 4px;
  vertical-align: middle;
}
.fa-rotate-180 {
  transform: rotateX(180deg);
}
</style>
