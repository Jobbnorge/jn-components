<template>
  <div class="board">
    <JnBoardList v-for="board in boards" v-bind:key="board.name" v-bind:name="board.name" v-bind:items="board.items"/>
  </div>
</template>

<script>

import JnBoardList from "./JnBoardList";

export default {
  name: "JnBoard",
  components: {
    JnBoardList,
  },
  props: {
    boards: Array,
  },
};
</script>

<style scoped>

.board {
  display: grid;  
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
</style>
