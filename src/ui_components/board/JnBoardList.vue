<template>
    <div class="boardlist">
      <div class="head">{{ name }}</div>
      <JnJobseekerMiniCard
        v-for="item in items"
        v-bind:key="item.key"
        v-bind="item"
      />     
    </div>
</template>

<script>
import JnJobseekerMiniCard from "./JnJobseekerMiniCard";

export default {
  name: "JnBoardList",
  components: {
    JnJobseekerMiniCard,
  },
  props: {
    name: String,
    items: Array
  },
};
</script>

<style scoped>

.boardlist {
  background-color: #eee;  
  border-radius: 3px;
  overflow: hidden;
}

.head {
  font-size: .9em;
  letter-spacing: 1px;
  padding: 1em;
  text-align: center;
  text-transform: uppercase;
  color: #1d764f;
  background-color: #d3f5df;
  margin-bottom: 1em;
}
</style>
