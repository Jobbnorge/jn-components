<template>
  <JnTimePicker id="time-test" label="Velg klokkeslett" hourLabel="Time med lang tekst" minuteLabel="Minutter"/>
</template>
<script>
import JnTimePicker from "../ui_components/datetime/JnTimePicker"
export default {
  name: "TimePickerExample",
  components: {
    JnTimePicker
  }
}
</script>