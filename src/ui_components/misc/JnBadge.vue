<template>
  <div class="badge" :class="colorClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "JnBadge",
  props: {
    colorClass: String,
  },
};
</script>
<style scoped>
.badge {
  display: inline-block;
  min-width: 1em; /* em unit */
  padding: 1em; /* em unit */
  border-radius: 1.5em;
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