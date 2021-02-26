<template>
  <div>
    <JnMiniButton :icon="faTimesCircle" colorTheme="pink">
      Slett
    </JnMiniButton>
    <JnMiniButton :icon="faTimesCircle" showBackground hasAnimation>
      Slett
    </JnMiniButton>
  </div>
</template>

<script>
import JnMiniButton from "../ui_components/buttons/JnMiniButton";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons";

export default {
  name: "ButtonExamples",
  components: {
    JnMiniButton
  },
  data() {
    return {
      faTimesCircle,
    };
  },
};
</script>