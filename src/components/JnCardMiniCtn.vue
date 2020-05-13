<template>
  <div>
    <div class="jn-card-mini-ctn-wrapper">
      <JnCardMini figure.number="5" info="Lorem ipsum dolor" />
      <JnCardMini figure.number="5" info="Lorem ipsum dolor" />
      <JnCardMini info="Lorem ipsum dolor">
        <template #chart>
          <JnPieChart :figures="pieData" height="80%" />
        </template>
      </JnCardMini>
      <JnCardMini info="Lorem">
        <template #chart>
          <JnPieChart :figures="pieData2" height="80%" :donutHoleSize="0.3" />
        </template>
      </JnCardMini>
    </div>
    <div style="height:800px;">
      <JnPieChart :figures="pieData2" />
    </div>
    <div class="pie-chart-wrapper">
      <JnPieChart :figures="pieData2" />
      <JnPieChart :figures="pieData2" :donutHoleSize="0.45" />
    </div>
    <div style="height:300px">
      <JnPieChart :figures="fluff" />
      <button type="button" @click="shuffle" class="btn btn-secondary">suffle</button>
    </div>
  </div>
</template>

<script>
import JnCardMini from "../ui_components/cards/JnCardMini";
import JnPieChart from "../ui_components/charts/JnPieChart";
export default {
  name: "JnCardMiniCtn",
  components: {
    JnCardMini,
    JnPieChart
  },
  data: function() {
    return {
      pieData: {
        Aktuell: 1,
        Ansatt: 5,
        Intervju: 4,
        "Min status": 1,
        Oppdatert: 1,
        Tilbud: 3,
        Ubehandlet: 31
      },
      pieData2: {
        Aktuell: 1,
        Ansatt: 5
      },
      fluff: {}
    };
  },
  mounted() {
    var vm = this;
    setTimeout(() => {
      vm.fluff = { hei: 1, hoo: 0, boo: 0 };
    }, 3000);
  },
  methods: {
    shuffle() {
      this.fluff = {
        hei: 3,
        hoo: 2,
        boo: 1
      };
    }
  }
};
</script>

<style scoped>
.jn-card-mini-ctn-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
}
.pie-chart-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
  height: 400px;
}
</style>