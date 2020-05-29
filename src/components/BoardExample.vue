<template>
  <div class="board">
    <JnBoardList
      name="Til vurdering"
      :items="boards[0].items"
      @draggableChanged="listChanged($event, boards[0].items)"
      draggableGroup="candidates"
      @draggableItemClicked="draggableItemClicked"
      :isDraggable="false"
    />
    <JnBoardList
      name="Intervju"
      :items="boards[1].items"
      @draggableChanged="listChanged($event, boards[1].items)"
      draggableGroup="candidates"
    />
    <div v-for="fluff in fluffs" :key="fluff.id">
      <JnBinaryDecision
        text="Kvalifisert?"
        :decision="fluff.decision"
        @change="makeDecision($event, fluff.id)"
        :id="fluff.id"
      />
    </div>
    <div v-for="fluff in fluffer" :key="fluff.id">
      <JnBinaryDecision
        text="Horisontal layout"
        layout="horizontal"
        :decision="fluff.decision"
        @change="makeHorDecision($event, fluff.id)"
        :id="fluff.id"
      />
    </div>
  </div>
</template>

<script>
import JnBoardList from "./../ui_components/board/JnBoardList";
import JnBinaryDecision from "./../ui_components/board/JnBinaryDecision";
export default {
  name: "demoList",
  components: {
    JnBoardList,
    JnBinaryDecision
  },
  data: function() {
    return {
      boards: [
        {
          name: "Til vurdering",
          items: [
            {
              firstName: "Per-Oskar",
              lastName: "Helgesen",
              title: "Rådgiver",
              points: 967,
              age: 32,
              id: 1
            },
            {
              firstName: "Gunnvor H.",
              lastName: "Mohaug",
              title: "Arbeidsledig",
              points: 1003,
              age: 31,
              id: 2
            }
          ]
        },
        {
          name: "Intervju",
          items: [
            {
              firstName: "Nils Carl Fredrik",
              lastName: "Akka Berg-Johansson",
              title: "Selger",
              points: 990,
              age: 27,
              id: 3
            },
            {
              firstName: "June Larsen",
              lastName: "Granlund",
              title: "Butikkmedarbeider",
              points: 850,
              age: 28,
              id: 4
            }
          ]
        }
      ],
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
      ],
      fluffer: [
        {
          id: 22,
          decision: null
        },
        {
          id: 23,
          decision: null
        },
      ]
    };
  },
  methods: {
    listChanged(evt, list) {
      if (Object.prototype.hasOwnProperty.call(evt, "added")) {
        list.push(evt.added.element);
      } else if (Object.prototype.hasOwnProperty.call(evt, "removed")) {
        let index = list.indexOf(evt.removed.element);
        list.splice(index, 1);
      }
    },
    draggableItemClicked(e) {
      console.info(e);
    },
    makeDecision({ srcElement: { value } }, fluffId) {
      this.fluffs.find(f => f.id == fluffId).decision = Number(value);
    },
    makeHorDecision({ srcElement: { value } }, fluffId) {
      this.fluffer.find(f => f.id == fluffId).decision = Number(value);
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
