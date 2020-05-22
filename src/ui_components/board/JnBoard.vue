<template>
  <div class="board">
    <JnBoardList
      v-for="board in boards"
      v-bind:key="board.name"
      v-bind:name="board.name"
      v-bind:items="board.items"
    />
    <div v-for="fluff in fluffs" :key="fluff.id">
      <JnBinaryDecision
        text="Kvalifisert?"
        :decision="fluff.decision"
        @change="makeDecision($event, fluff.id)"
        :id="fluff.id"
      />
    </div>
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
      fluffs: [
        {
          id: 1,
          decision: null
        },
        {
          id: 12,
          decision: null
        },
        {
          id: 123,
          decision: null
        },
        {
          id: 1234,
          decision: null
        }
      ]
    };
  },
  props: {
    boards: Array
  },
  methods: {
    makeDecision({ srcElement: { value } }, fluffId) {
      this.fluffs.find(f => f.id == fluffId).decision = Number(value);
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
