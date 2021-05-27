<template>
  <div>
    <Popper :config="{placement: 'top'}">
      <template #trigger>
        <JnButton data-trigger @JnButton-clicked="isOpen = !isOpen"
          >Click me</JnButton
        >
      </template>
      <template #popper v-if="isOpen">
        <div id="tooltip" style="width: 100px">
          <p>Dette er en tooltip</p>
        </div>
      </template>
    </Popper>
  </div>
</template>
<script>
import Popper from "../ui_components/misc/Popper";
import JnButton from "../ui_components/buttons/JnButton";
export default {
  components: {
    Popper,
    JnButton,
  },
  data() {
    return {
      isOpen: false,
      isHover: false,
    };
  }
};
</script>
