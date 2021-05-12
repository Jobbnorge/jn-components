<template>
  <div>
    <JnTimePicker
      id="time-test"
      label="Velg klokkeslett"
      hourLabel="Time med lang tekst"
      minuteLabel="Minutter"
      showButton
      @time-updated="showTime"
    />
    <p style="font-size: 1rem; margin-top: 0.5rem;">
      Tiden er:
      <span>{{time}}</span>
    </p>
  </div>
</template>
<script>
import JnTimePicker from "../ui_components/datetime/JnTimePicker";
export default {
  name: "TimePickerExample",
  components: {
    JnTimePicker,
  },
  data() {
    return {
      time: "Ikke satt",
    };
  },
  methods: {
    showTime: function(e) {
      this.time = e
    }
  }
};
</script>
