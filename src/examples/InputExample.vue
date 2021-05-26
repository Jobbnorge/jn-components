<template>
  <div>
    <JnTextArea
      :max="400"
      labelText="Skriv ditt svar her"
      placeholder="I am a placeholder text"
      :minHeight="80"
      id="my-text-area"
    />
    <JnTextArea
      :max="50"
      labelText="Hvor lang er sola?"
      text="Vet ikke??"
      :minHeight="80"
      id="my-text-area"
    />
  </div>
</template>

<script>
import JnTextArea from "../ui_components/input/JnTextArea";
export default {
  components: {
    JnTextArea,
  },
};
</script>