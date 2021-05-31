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
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    handleClick() {
      this.isActive = !this.isActive;
      if (this.isActive === true) {
        this.$emit("jnToggleButton-on", this.id)
      }
      else {
        this.$emit("jnToggleButton-off", this.id)
      }
    },
  },
};
</script>
