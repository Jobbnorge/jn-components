<template>
  <div class="grid-hor-cards">
    <JnCardHorizontal v-for="card in cards" :key="card.title" v-bind="card"></JnCardHorizontal>
  </div>
</template>

<script>
import JnCardHorizontal from "./../ui_components/cards/JnCardHorizontal";

export default {
  name: "HorizontalCards",
  components: {
    JnCardHorizontal,
  },
  data() {
    return {
      cards: [
        {
          mainFrameTitle: "920",
          colorTheme: "blue",
          secondFrameTitle: "Gjennomsnitt screeningscore",
          secondFrameTopText: "av 1200 mulige",
        },
        {
          mainFrameTitle: "22%",
          colorTheme: "gray",
          secondFrameTitle: "Kvalifiserte",
          secondFrameTopText: "",
        },
        {
          mainFrameTitle: "92",
          colorTheme: "red",
          secondFrameTitle: "Nye søkere",
          secondFrameTopText: "200 søkere totalt",
        },
        {
          faClass: "fa-comments",
          iconPadding: 34,
          colorTheme: "green",
          secondFrameTitle: "Forespørsler",
          secondFrameTopText: "Krever handling",
        },
        {
          mainFrameTitle: "8",
          mainFrameSubtitle: "Søknader",
          colorTheme: "blue",
          secondFrameTitle: "I snitt per stilling",
          secondFrameFontSize: "small",
        },
        {
          mainFrameTitle: "24",
          mainFrameSubtitle: "Søknader totalt",
          colorTheme: "blue",
          secondFrameTitle: "Fordelt på 4 publiserte stillinger",
          secondFrameFontSize: "small",
        },
      ],
    };
  },
};
</script>

<style scoped>
.grid-hor-cards {
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(2, 314px);
  grid-template-rows: repeat(3, 103px);
  grid-gap: 1em;
}
</style>