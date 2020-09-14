<template>
  <div>
    <div class="jn-card-mini-ctn-wrapper">
      <JnCardMini :figure="5" />
      <JnCardMini :figure="5" info="Lorem ipsum dolorLorem ipsumLorem ipsum" />
      <JnCardMini info="hello">
        <template #chart>
          <div>
            <div>
              <JnPieChart :figures="pieData" />
              <JnLegend :figures="pieData" align="vertical" />
            </div>
          </div>
        </template>
      </JnCardMini>
      <JnCardMini info="Lorem ipsum">
        <template #chart>
          <div>
            <JnPieChart :figures="pieData2" height="80%" :donutHoleSize="0.3" />
            <JnLegend :figures="pieData2" />
          </div>
        </template>
      </JnCardMini>
    </div>
    <div style="height:800px;">
      <JnPieChart :figures="pieData2" defaultFigure="6" defaultText="Totalt" />
    </div>
    <div class="pie-chart-wrapper">
      <JnPieChart :figures="pieData2" />
      <JnPieChart :figures="pieData2" :donutHoleSize="0" strokeColor="#DDDDDD" :strokeWidth="0" />
    </div>
    <div style="height:300px">
      <div>
        <JnPieChart :figures="fluff" height="80%" />
        <JnLegend :figures="fluff" align="horizontal" />
      </div>
      <button type="button" @click="shuffle" class="btn btn-secondary">suffle</button>
    </div>
    <div>
      <JnPieChart :figures="pieData2" />
      <JnLegend :figures="pieData2" />
    </div>
  </div>
</template>

<script>
import JnCardMini from "../ui_components/cards/JnCardMini";
import JnPieChart from "../ui_components/charts/JnPieChart";
import JnLegend from "../ui_components/charts/JnLegend";
export default {
  name: "JnCardMiniCtn",
  components: {
    JnCardMini,
    JnPieChart,
    JnLegend
  },
  data: function() {
    return {
      pieData: {
        Aktuell: 5,
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
      vm.fluff = { hei: 1, hoo: 0, boo: 4 };
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