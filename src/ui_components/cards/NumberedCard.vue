<template>
  <JnCard title="">
    <template #content>
      <div>
        <span :class="['round', colorTheme]">{{ number }}</span>
        <slot></slot>
      </div>
    </template>
  </JnCard>
</template>

<script>
import JnCard from "./JnCard";
export default {
  components: {
    JnCard,
  },
  props: {
    number: Number,
    colorTheme: String,
  },
};
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: center;
}
.round {
  width: 1.5em;
  height: 1.5em;
  font-size: 1.5em;
  text-align: center;
  border-radius: 50%;
}
</style>
