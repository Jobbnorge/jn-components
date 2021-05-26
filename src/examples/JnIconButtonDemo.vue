<template>
  <div>
    <p>4x size and hasAnimation:</p>
    <JnIconButton :icon="faDownload" size="4x" hasAnimation />
    <p>Default JnIconButton:</p>
    <JnIconButton :icon="faChevronRight" />
  </div>
</template>
<script>
import { faChevronRight, faDownload } from "@fortawesome/pro-light-svg-icons";
import JnIconButton from "./../ui_components/buttons/JnIconButton";

export default {
  name: "JnIconButtonDemo",
  components: {
    JnIconButton,
  },
  data() {
    return {
      faDownload,
      faChevronRight,
    };
  },
};
</script>