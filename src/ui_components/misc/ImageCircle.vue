<template>
  <img :src="src" class="circle" :style="setSize" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    size: Number
  },
  computed: {
    setSize: function() {
      return `width: ${this.size}px; height: ${this.size}px`
    }
  }
}
</script>

<style scoped>
.circle {
  clip-path: circle(50% at 50% 50%);
}
</style>