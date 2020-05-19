<template>
  <div class="board">
    <JnBoardList :orderby="orderby" :direction="direction" v-for="board in boards" v-bind:key="board.name" v-bind:name="board.name" v-bind:items="board.items"/>
  </div>
</template>

<script>

import JnBoardList from "./JnBoardList";
import { ORDER_DIRECTION } from "./JnBoardList";

export default {
  name: "JnBoard",
  components: {
    JnBoardList,
  },
  props: {
    boards: Array
  },
  data: function() {
    return {
      orderby: undefined,
      direction: ORDER_DIRECTION.ASCENDING
    }        
  }
};
</script>

<style scoped>

.board {
  display: grid;  
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;  
}

</style>
