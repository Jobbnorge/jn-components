<template>
  <div class="jn-card-mini-wrapper">
    <slot name="chart" />
    <div v-if="figure" class="jn-card-mini-content jn-card-mini-figure">{{figure}}</div>
    <div v-if="info" class="jn-card-mini-content jn-card-mini-info">{{info}}</div>
  </div>
</template>

<script>
export default {
  name: "JnCardMini",
  props: {
    figure: Number,
    info: String
  }
};
</script>

<style scoped>
.jn-card-mini-wrapper {
  background-color: #e8f5fa;
  padding: 1em 0;
  display: grid; 
  align-content: center;
}
.jn-card-mini-content {
  justify-self: center;
}
.jn-card-mini-figure {
  font-size: 4em;
}
</style>