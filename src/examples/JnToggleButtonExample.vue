<template>
  <div>
    <JnToggleButton colorTheme="gray" id="t1" @jnToggleButton-active="toggle">
      <span class="fas fa-star"></span>
      Vis min rangering
    </JnToggleButton>
    <JnToggleButton colorTheme="gray" id="t2" @jnToggleButton-active="toggle">
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
  methods: {
      toggle: function(id) {
          alert(`toggle on for: ${id}`)
      }
  }
};
</script>
