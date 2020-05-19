<template>
  <div class="board">
    <JnBoardList
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

export default {
  name: "JnBoard",
  components: {
    JnBoardList,
    JnBinaryDecision
  },
  data: function() {
    return {
      decision: null
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
