<template>
  <ul>
    <li v-for="(faClass, name, index) in listItems" :key="index">
      <span :class="faClass" ></span>
      {{name}}
    </li>
  </ul>
</template>

<script>

export default {
  name: "JnIconList",
  props: {
    listItems: Object,
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
}
span {
  font-size: 1em;
  margin-right: 0.5rem; 
}
</style>