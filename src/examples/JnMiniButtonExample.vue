<template>
  <div>
    <JnMiniButton colorTheme="pink">
      <span :class="['fas', 'fa-times-circle']"></span>
      Slett
    </JnMiniButton>
    <JnMiniButton showBackground hasAnimation>
      <span :class="['fas', 'fa-times-circle']"></span>
      Slett
    </JnMiniButton>
  </div>
</template>

<script>
import JnMiniButton from "../ui_components/buttons/JnMiniButton";

export default {
  name: "ButtonExamples",
  components: {
    JnMiniButton,
  },
};
</script>
