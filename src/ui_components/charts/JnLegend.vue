<template>
  <ul v-if="align === 'vertical'">
    <li v-for="item in Object.keys(figures)" :key="item">
      <fa-icon :icon="['far', 'square']" :style="{color: color(item)}" />
      <span class="ml-1">{{item}}</span>
    </li>
  </ul>
  <div v-else class="inline-view">
    <div class="mr-3" v-for="item in Object.keys(figures)" :key="item">
      <fa-icon :icon="['far', 'square']" :style="{color: color(item)}" />
      <span class="ml-2">{{item}}</span>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "JnLegend",
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
      color: function(){}
    };
  },
  mounted() {
    var hexColors =
      Object.keys(this.figures).length > 2
        ? ["#127DAC", "#1D764F", "#D41472", "#44303C", "#7AD296"]
        : ["#1D754F", "#D3F5DF"];

    this.color = d3
      .scaleOrdinal()
      .domain(this.figures)
      .range(hexColors);
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
</style>