<template>
<div>
  <JnButton>Standard styling</JnButton>
  <div>
    <JnButton colorTheme="blue">Mørk blå</JnButton>
    <JnButton colorTheme="blue" light>Lys blå</JnButton>
  </div>
  <div>
    <JnButton colorTheme="gray">Mørk grå (aubergine)</JnButton>
    <JnButton colorTheme="gray" light>Lys grå</JnButton>
  </div>
  <div>
    <JnButton colorTheme="green">Mørk grønn</JnButton>
    <JnButton colorTheme="green" light>Lys grønn</JnButton>
  </div>
  <div>
    <JnButton colorTheme="pink">Mørk rosa</JnButton>
    <JnButton colorTheme="pink" light>Lys rosa</JnButton>
  </div>
</div>
</template>

<script>
import JnButton from "./../ui_components/buttons/JnButton"
export default {
  components: {
    JnButton
  }
}
</script>

<style scoped>
div {
  margin-top: 1rem; 
}
</style>