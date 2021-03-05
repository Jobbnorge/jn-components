<template>
  <div
    class="badge"
    :class="[
      computedColorThemeStyle,
      computedBorderStyle,
      { squared: squared },
      { small: small },
      { clickable: clickable },
    ]"
    @click="handleClick()"
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
      },
    },
    hasBorder: {
      type: Boolean,
      default: false,
    },
    squared: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
    setToActive: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isActive: null,
    };
  },
  created() {
    this.isActive = this.setToActive;
  },
  computed: {
    computedBorderStyle: function() {
      if (this.clickable && this.hasBorder) {
        return this.isActive ? "border-color" : "border-trans";
      }
      return this.hasBorder ? "border-color" : "border-trans";
    },
    computedColorThemeStyle: function() {
      if (this.clickable) {
        return this.isActive ? this.colorTheme : "gray";
      }
      return this.colorTheme;
    },
  },
  methods: {
    handleClick() {
      if (this.clickable) {
        this.isActive = !this.isActive;
        this.$emit("JnBadge-clicked", { isActive: this.isActive, id: this.id });
      }
    },
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
.clickable {
  cursor: pointer;
}
.border-color {
  border: 1px solid;
}
.border-trans {
  border: 1px solid transparent;
}
</style>
