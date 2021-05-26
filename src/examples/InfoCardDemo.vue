<template>
  <div>
    <JnInfoCard title="Vi oppdaterer Jobbadmin" :hyperlink="myHyperlink">
      <template #body
        ><p>
          Her kommer en oppdatering om noe som skjer i jobbadmin! Og jeg er passet inn via en slot
        </p></template
      >
    </JnInfoCard>

    <JnInfoCard title="Nye funksjoner" :icon="faComments" removable>
      <template #body
        ><p>
          Nå kan du endelig gjøre masse greier du har ventet lenge på å få gjøre
          i Jobbadmin. Vi gleder oss, håper du også gjør det
        </p></template
      >
    </JnInfoCard>
    <JnInfoCard title="Nye funksjoner" :icon="faComments" removable body="Dette er en bodytekst som ikke er en slot">
    </JnInfoCard>
  </div>
</template>
<script>
import Hyperlink from "../domain/Hyperlink";
import { faComments } from "@fortawesome/pro-light-svg-icons";
import JnInfoCard from "../ui_components/cards/JnInfoCard";
export default {
  name: "InfoCardDemo",
  components: {
    JnInfoCard,
  },
  data: function() {
    return {
      myHyperlink: new Hyperlink(),
      faComments,
    };
  },
  created() {
    this.myHyperlink.friendlyName = "Vis mer";
    this.myHyperlink.url = "http://trunk.com/apps/jobbadmin";
  },
};
</script>
<style scoped>
div {
  display: grid;
  gap: 1rem;
}
</style>
