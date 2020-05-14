<template>
  <div class="grid-hor-cards">
    <JnCardHorizontal
      v-for="card in cards"
      :key="card.title"
      :mainFrameTitle="card.mainFrameTitle"
      :colorTheme="card.colorTheme"
      :secondFrameTitle="card.secondFrameTitle"
      :secondFrameTopText="card.secondFrameTopText"
      :icon="card.icon"
    ></JnCardHorizontal>
  </div>
</template>

<script>
import JnCardHorizontal from "./../ui_components/cards/JnCardHorizontal";

export default {
  name: "HorizontalCards",
  components: {
    JnCardHorizontal
  },
  data() {
    return {
      cards: [
        {
          mainFrameTitle: "920",
          colorTheme: "blue",
          secondFrameTitle: "Gjennomsnitt screeningscore",
          secondFrameTopText: "av 1200 mulige"
        },
        {
          mainFrameTitle: "22%",
          colorTheme: "black",
          secondFrameTitle: "Kvalifiserte",
          secondFrameTopText: ""
        },
        {
          mainFrameTitle: "92",
          colorTheme: "red",
          secondFrameTitle: "Nye søkere",
          secondFrameTopText: "200 søkere totalt"
        },
        {
          icon: "comments",
          colorTheme: "green",
          secondFrameTitle: "Forespørsler",
          secondFrameTopText: "Krever handling"
        }
      ]
    };
  }
};
</script>

<style scoped>
.grid-hor-cards {
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(2, 314px);
  grid-template-rows: repeat(2, 103px);
  grid-gap: 1em;
}
</style>