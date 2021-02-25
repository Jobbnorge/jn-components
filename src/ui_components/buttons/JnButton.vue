<template>
  <button type="button" :class="['btn', colorTheme, {'light': light}, 'animate']" @click="$emit('JnButton-clicked')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    colorTheme: {
      type: String,
      default: "secondary",
      validator: function (value) {
        return ["blue", "pink", "gray", "green"].indexOf(value) !== -1;
      },
    },
    light: {
      type: Boolean,
      default: false
    },
    hasBorder: {
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
button:hover,button:focus, button:active {
  filter: brightness(90%); /* 95% coverage unprefixed, caniuse.com  */ 
}
.secondary {
  background: #fff;
  border: 1px solid var(--gray); 
  color: var(--gray); 
}

</style>