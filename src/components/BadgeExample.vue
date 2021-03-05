<template>
  <div>
    <JnBadge colorTheme="pink">Ny</JnBadge>
    <JnBadge colorTheme="blue">Hot new feature!</JnBadge>
    <JnBadge colorTheme="green" small squared
      >Jeg er firkantet og liten</JnBadge
    >
    <JnBadge colorTheme="gray" small>og jeg er rund og liten</JnBadge>
    <JnBadge colorTheme="green" small squared clickable id="my-badge">Jeg har event</JnBadge>
    <JnBadge colorTheme="green" small squared clickable setToActive hasBorder toggle>Du kan slå meg av</JnBadge>
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