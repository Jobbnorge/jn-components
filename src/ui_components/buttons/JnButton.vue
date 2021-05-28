<template>
  <button
    type="button"
    :class="['btn', colorTheme, { light: light }, 'animate', {'jn-border': hasBorder}, {caps: caps}]"
    @click="$emit('JnButton-clicked')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
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
    light: {
      type: Boolean,
      default: false,
    },
    hasBorder: {
      type: Boolean,
      default: false,
    },
    caps: {
      type: Boolean,
      default: false
    }
  },
};
</script>
<style scoped>
button {
  border: 1px solid transparent;
}
.secondary {
  background: #fff;
  color: var(--gray);
}
.secondary.jn-border {
  border: 1px solid var(--gray); 
}
.secondary:hover {
  background: var(--lightBlue); 
}
.icon {
  width: 1rem;
  height: 1rem;
  display: inline-flex;
  margin-right: 0.5rem;
}
.caps {
  text-transform: uppercase;
}
</style>
