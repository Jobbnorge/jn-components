<template>
  <button
    type="button"
    :class="['btn light', isActive ? colorTheme : '']"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "JnToggleButton",
  props: {
    colorTheme: {
      type: String,
      default: "secondary",
      validator: function(value) {
        return (
          ["blue", "pink", "gray", "green", "secondary"].indexOf(value) !== -1
        );
      },
    },
    id: {
      type: String,
    },
    isControlledByParent: {
      type: Boolean,
      default: false,
    },
    toggleIsActive: {
      type: Boolean,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    handleClick() {
      if (this.isControlledByParent) {
        this.isActive = !this.toggleIsActive;
      } else {
        this.isActive = !this.isActive;
      }
      this.isActive
        ? this.$emit("jnToggleButton-on", this.id)
        : this.$emit("jnToggleButton-off", this.id);
    },
  },
};
</script>
