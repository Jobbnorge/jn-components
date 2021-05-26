<template>
  <div class="button-wrapper pt20">
    <h3>Buttons</h3>
    <JnTextButton url="http://nrk.no" id="someIdToDoStuff">My text</JnTextButton>
    <JnTextButton url="http://nrk.no" id="otherIdToDoStuff" :icon="faChurch">your text</JnTextButton>
    <div class="button-row">
      <JnToggleButton :iconActive="faHouse" :iconInactive="faChurch" placement="left">Toggle Text</JnToggleButton>
      <JnToggleButton :iconActive="faHouse" placement="right">Toggle Text</JnToggleButton>
    </div>
    <h3>Dropdown meny</h3>
    <JnDropDownBtn
      :icon="faHouse"
      text="No anchor-tag"
      type="event"
      :options="[{text: 'hello'}, {text: 'hello 2'}]"
      @itemClicked="itemClicked"
    />
    <JnDropDownBtn
      text="With anchor tag"
      :options="[{text: 'NRK', url: 'http://www.nrk.no'}, {text: 'VG', url: 'http://www.vg.no'}]"
    />
    <JnIconButton :icon="faHouse" :hasAnimation="false"></JnIconButton>
  </div>
</template>

<script>
import JnTextButton from "./../ui_components/buttons/JnTextButton";
import JnToggleButton from "./../ui_components/buttons/JnToggleButton";
import JnDropDownBtn from "./../ui_components/buttons/JnDropDownBtn";
import JnIconButton from "./../ui_components/buttons/JnIconButton";
import { faHouse, faChurch } from "@fortawesome/pro-light-svg-icons";

export default {
  name: "ButtonDemo",
  components: {
    JnTextButton,
    JnToggleButton,
    JnDropDownBtn,
    JnIconButton,
  },
  data() {
    return {
      item: {},
      faHouse,
      faChurch,
    };
  },
  methods: {
    itemClicked(event) {
      this.item = event;
    },
  },
};
</script>
<style scoped>
.button-wrapper > * {
  margin-bottom: 1rem;
}
.button-row {
  display: flex;
}
.button-row > div {
  margin: 1rem 1rem 1rem 0rem;
}
</style>
