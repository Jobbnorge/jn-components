<template>
  <div>
    <JnToggleButton
      colorTheme="gray"
      id="t1"
      @jnToggleButton-on="toggle"
      @jnToggleButton-off="off"
    >
      <span class="fas fa-star"></span>
      Vis min rangering
    </JnToggleButton>
    <JnToggleButton
      colorTheme="pink"
      id="t2"
      isControlledByParent
      :toggleIsActive="isActive"
      @jnToggleButton-on="toggle"
      @jnToggleButton-off="off"
    >
      <span class="fas fa-star-half"></span>
      Vis andres rangering
    </JnToggleButton>
  </div>
</template>

<script>
import JnToggleButton from "./../ui_components/buttons/JnToggleButton";

export default {
  name: "JnToggleButtonExample",
  components: {
    JnToggleButton,
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggle: function(id) {
      this.isActive = !this.isActive
      alert(`toggle on for: ${id}`);
    },
    off: function(id) {
      this.isActive = !this.isActive
      alert(`toggle off for: ${id}`);
    }
  },
};
</script>
