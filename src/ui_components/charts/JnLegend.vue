<template>
  <ul v-if="align === 'vertical'">
    <li v-for="(value, key) in figures" :key="key">
      <FontAwesomeIcon :icon="faCircle" :style="{color: color(key)}" />
      <span class="ml-1">{{key}}: {{value}}</span>
    </li>
  </ul>
  <div v-else class="inline-view">
    <div class="mr-3" v-for="(value, key) in figures" :key="key">
      <FontAwesomeIcon :icon="faCircle" :style="{color: color(key)}" />
      <span class="ml-2">{{key}}: {{value}}</span>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { faCircle } from "@fortawesome/pro-solid-svg-icons";

fontAwesomeConfig.autoAddCss = false;

export default {
  name: "JnLegend",
  components: {
    FontAwesomeIcon
  },
  props: {
    figures: {
      type: Object,
      required: true
    },
    align: {
      type: String,
      default: "vertical"
    }
  },
  data: function() {
    return {
      color: function() {},
      hexColors: [],faCircle
    };
  },
  methods: {
    renderLegend: function() {
      if (Object.keys(this.figures).length <= 0) return;

      this.hexColors =
        Object.keys(this.figures).length > 2
          ? ["#127DAC", "#1D764F", "#D41472", "#44303C", "#7AD296"]
          : ["#1D754F", "#D3F5DF"];

      this.color = d3
        .scaleOrdinal()
        .domain(this.figures)
        .range(this.hexColors);
    }
  },
  mounted() {
    this.renderLegend();
  },
  watch: {
    figures: function() {
      this.renderLegend();
    }
  }
};
</script>

<style scoped>
ul {
  padding: 1em 0;
  margin: 0;
  list-style: none;
  text-align: center;
}
div.inline-view {
  text-align: center;
}
div.inline-view > div {
  display: inline;
}
.svg-inline--fa {
  width: 1em;
  height: 1em;
  display: inline-block;
}
</style>