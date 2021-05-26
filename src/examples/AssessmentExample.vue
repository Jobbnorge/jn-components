<template>
  <div>
    <div class="container">
      <JnPickDateTime colorTheme="green" />
    </div>
    <JnCounter :startAt="5" :max="20" :min="1" />
    <JnBinaryDecision :id="1" text="Vil du gjøre noe?" :decision="decision" @clicked-decision="clickedDecisionHandler" />
  </div>
</template>
<script>
import JnPickDateTime from "./../ui_components/datetime/JnPickDateTime";
import JnCounter from "./../ui_components/assessment/JnCounter";
import JnBinaryDecision from "./../ui_components/board/JnBinaryDecision";

export default {
  name: "AsessmentExample",
  components: {
    JnPickDateTime,
    JnCounter,
    JnBinaryDecision,
  },
  data() {
    return {
      time: {},
      decision: 0
    };
  },
  methods: {
    tellTime(time) {
      this.time = time;
    },
    inputBlur(date) {
      console.info(date);
    },
    clickedDecisionHandler(e) {
      this.decision = Number(e.srcElement.value);
    },
  },
};
</script>
<style scoped>
.container {
  width: 50%;
  height: 100%;
}
</style>