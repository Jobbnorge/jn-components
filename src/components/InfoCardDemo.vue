<template>
  <div>
    <JnInfoCard
      title="Vi oppdaterer Jobbadmin"
      body="Oppdateringen vil foregå fra 07:00 - 08:00 den 26.6. Systemet vil derfor kunne oppleves som treigt innimellom"
      :hyperlink="myHyperlink"
    />
    <JnInfoCard
      title="Nye funksjoner"
      :icon="faComments"
      body="Nå kan du endelig gjøre masse greier du har ventet lenge på å få gjøre i Jobbadmin. Vi gleder oss, håper du også gjør det!"
      removable
    />
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
  data: function () {
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