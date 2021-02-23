<template>
  <JnTextArea 
    :max="400"  
    labelText="Skriv ditt svar her"
    placeholder="I am a placeholder text" 
    minHeight="80"
  />
</template>

<script>
import JnTextArea from "../ui_components/input/JnTextArea"
export default {
    components: {
        JnTextArea
    }
}
</script>

<style>

</style>