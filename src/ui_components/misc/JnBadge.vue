<template>
  <div
    class="badge"
    :class="[colorTheme, { squared: squared }, { small: small }]"
    v-bind:style="{ border: computedBorderStyle }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "JnBadge",
  props: {
    colorTheme: {
      type: String,
      required: true,
      validator: function(value) {
        return ["blue", "pink", "gray", "green"].indexOf(value) !== -1;
      }
    },
    hasBorder: Boolean,
    squared: Boolean,
    small: Boolean
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
.squared {
  border-radius: 2px;
}
.small {
  padding: 0.3rem;
  font-size: 12px;
}
</style>