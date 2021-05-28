<template>
  <JnCard title="Min tittel">
    <template #content>
      <div class="applicant-info-wrapper">
        <JnCardMini info="Noe data" :figure="4"></JnCardMini>
        <JnCardMini>
          <template #chart>
            <div>
              <JnPieChart height="75px" :figures="pieData" :strokeWidth="0" />
              <JnLegend :figures="pieData" />
            </div>
          </template>
        </JnCardMini>
      </div>
    </template>
  </JnCard>
</template>
<script>
import JnCard from "../ui_components/cards/JnCard";
import JnCardMini from "../ui_components/cards/JnCardMini";
import JnPieChart from "../ui_components/charts/JnPieChart";
import JnLegend from "../ui_components/charts/JnLegend";
export default {
  components: {
    JnCard,
    JnCardMini,
    JnPieChart,
    JnLegend,
  },
  data() {
    return {
      pieData: {eple: 2, banan: 3, appelsin: 7}
    };
  },
};
</script>
<style scoped>
.applicant-info-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1em;
}
</style>
