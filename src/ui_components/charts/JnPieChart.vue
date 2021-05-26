<template>
  <svg class="pie-chart" width="100%" height="100%" />
</template>

<script>
import * as d3 from "d3";

export default {
  name: "JnPieChart",
  props: {
    figures: Object,
    donutHoleSize: {
      type: Number,
      default: 0.64,
      validator: function(val) {
        return val >= 0 && val <= 1;
      },
    },
    strokeWidth: {
      type: Number,
      default: 2,
    },
    strokeColor: {
      type: String,
      default: "#FFFFFF",
      validator: function(val) {
        return val.match(/^#[0-9A-F]{6}$/).length > 0;
      },
    },
    defaultFigure: {
      type: String,
      default: "",
    },
    defaultText: {
      type: String,
      default: "",
    },
  },
  methods: {
    showFigure({ data: { key: name, value: figure } }) {
      let groupElements = this.$el.getElementsByTagName("text");
      groupElements[0].textContent = figure;
      groupElements[1].textContent = name;
    },
    hideFigure() {
      let groupElements = this.$el.getElementsByTagName("text");
      groupElements[0].textContent = this.defaultFigure;
      groupElements[1].textContent = this.defaultText;
    },
    renderChart() {
      if (Object.keys(this.figures).length > 0) {

        var svgEl = this.$el;
        svgEl.childNodes.forEach((c) => svgEl.removeChild(c));

        var width = $(this.$el).width();
        var height = $(this.$el).height();
        // The radius of the pieplot is half the width or half the height (smallest one)
        var radius = Math.min(width, height) * 0.5;

        var hexColors =
          Object.keys(this.figures).length > 2
            ? ["#127DAC", "#1D764F", "#D41472", "#44303C", "#7AD296"]
            : ["#1D754F", "#D3F5DF"];

        var color = d3
          .scaleOrdinal()
          .domain(this.figures)
          .range(hexColors);

        // append the svg object to the div called 'my_dataviz'
        var svg = d3
          .select(this.$el)
          .attr("viewBox", `0 0 ${width} ${height}`)
          .append("g")
          .attr("transform", `translate(${width / 2},${height / 2})`);
        console.log("before the data");
        // docs: https://github.com/d3/d3-shape/blob/v1.3.7/README.md#pies
        var data = d3.pie().value((d) => d.value)(d3.entries(this.figures));
        console.log("THE DATA", data);

        var arc = d3
          .arc()
          .innerRadius(radius * this.donutHoleSize)
          .outerRadius(radius);

        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg
          .selectAll() // gets a reference to list that holds all child-nodes; there are no children yet, thus the list is empty
          .data(data) // attaches data to the list of child-nodes
          .enter() // creates DOM elements for child-nodes not rendered to the DOM yet (applys usually to all the items residing in data)
          .append("path")
          .attr("fill", function(d) {
            return color(d.data.key);
          })
          .attr("d", arc);

        if (this.strokeWidth > 0) {
          svg
            .selectAll("path")
            .attr("stroke", this.strokeColor)
            .style("stroke-width", `${this.strokeWidth}px`);
        }

        let donutDiameter = parseInt(2 * radius * this.donutHoleSize);

        if (donutDiameter > 90) {
          let fontSizeFigure = donutDiameter * 0.2;
          let fontSizeText =
            donutDiameter * 0.1 > 14 ? donutDiameter * 0.1 : 14;

          svg
            .selectAll("path")
            .on("mouseenter", this.showFigure)
            .on("mouseleave", this.hideFigure);

          svg
            .append("text")
            .attr("text-anchor", "middle")
            .attr("y", "-10")
            .attr("style", `font-size:${fontSizeFigure}px`)
            .text(`${this.defaultFigure}`);
          svg
            .append("text")
            .attr("text-anchor", "middle")
            .attr("x", "0")
            .attr("y", `${donutDiameter * 0.15}`)
            .attr("style", `font-size:${fontSizeText}px`)
            .text(`${this.defaultText}`);
        }
      }
    },
  },
  mounted() {
    this.renderChart();
  },
  watch: {
    figures: function() {
      this.renderChart();
    },
  },
};
</script>
