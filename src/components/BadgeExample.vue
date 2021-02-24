<template>
  <div>
    <JnBadge colorTheme="pink">Ny</JnBadge>
    <JnBadge colorTheme="blue">Hot new feature!</JnBadge>
    <JnBadge colorTheme="green" small squared
      >Jeg er firkantet og liten</JnBadge
    >
    <JnBadge colorTheme="gray" small>og jeg er rund og liten</JnBadge>
  </div>
</template>
<script>
import JnBadge from "../ui_components/misc/JnBadge";
export default {
  name: "BadgeExample",
  components: {
    JnBadge,
  },
};
</script>