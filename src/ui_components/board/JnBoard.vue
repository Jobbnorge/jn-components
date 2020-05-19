<template>
  <div class="board">
    <JnBoardList
      :orderby="orderby"
      :direction="direction"
      v-for="board in boards"
      v-bind:key="board.name"
      v-bind:name="board.name"
      v-bind:items="board.items"
    />
    <JnBinaryDecision text="Kvalifisert?" :decision="decision" @change="makeDecision" />
  </div>
</template>

<script>
import JnBoardList from "./JnBoardList";
import JnBinaryDecision from "./JnBinaryDecision";
import { ORDER_DIRECTION } from "./JnBoardList";

export default {
  name: "JnBoard",
  components: {
    JnBoardList,
    JnBinaryDecision
  },
  data: function() {
    return {
      decision: null,
      orderby: undefined,
      direction: ORDER_DIRECTION.ASCENDING
    };
  },
  props: {
    boards: Array
  },
  methods: {
    makeDecision({ srcElement: { value } }) {
      this.decision = Number(value);
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
