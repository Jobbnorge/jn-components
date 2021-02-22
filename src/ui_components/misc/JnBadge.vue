<template>
  <div class="badge" :class="colorClass" v-bind:style="{ border: computedBorderStyle }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "JnBadge",
  props: {
    colorClass: String,
    hasBorder: Boolean,
  },
  computed: {
    computedBorderStyle: function () {
      return this.hasBorder ? '1px solid' : '1px solid transparant;'
    }
  },
};
</script>
<style scoped>
.badge {
  display: inline-block;
  min-width: 1em; /* em unit */
  padding: 0.5em 1em; /* em unit */
  border-radius: 1.5em;
  font-size: 100%; /* Override default Bootstrap styling  */
  font-weight: 400; /* Override default Bootstrap styling */
  line-height: 1;
}
.pink {
  background: #ffeef6;
  color: #d41472;
}

.grey {
  background: #f6f5f6;
  color: #44303c;
}

.blue {
  background: #e8f5fa;
  color: #127dac;
}

.green {
  background: #d3f5df;
  color: #1d764f;
}
</style>