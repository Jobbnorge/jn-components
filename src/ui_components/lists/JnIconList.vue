<template functional>
  <ul :class="data.staticClass" v-bind="data.attrs">
    <li v-for="(value, name, index) in props.listItems" :key="index">
      <fa-icon :icon="['fal', value]" />
      {{name}}
    </li>
  </ul>
</template>

<script>
export default {
  functional: true,
  name: "JnIconList",
  props: {
    listItems: Object
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
}
svg {
  margin-right: 0.5rem;
}
</style>