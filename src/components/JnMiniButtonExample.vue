<template>
  <div>
    <JnMiniButton colorTheme="pink">
      <FontAwesomeIcon :icon="faTimesCircle" style="color: #127dac" />
      Slett
    </JnMiniButton>
    <JnMiniButton showBackground hasAnimation>
      <FontAwesomeIcon :icon="faTimesCircle" />
      Slett
    </JnMiniButton>
  </div>
</template>

<script>
import JnMiniButton from "../ui_components/buttons/JnMiniButton";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons";

fontAwesomeConfig.autoAddCss = false;

export default {
  name: "ButtonExamples",
  components: {
    JnMiniButton,
    FontAwesomeIcon,
  },
  data() {
    return {
      faTimesCircle,
    };
  },
};
</script>