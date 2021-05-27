<template>
<div>
  <h1>Standard knapper</h1>
  <JnButton>Standard styling</JnButton>
  <JnButton hasBorder>Standard styling-border</JnButton>
  <div>
    <JnButton colorTheme="blue">Mørk blå</JnButton>
    <JnButton colorTheme="blue" light>Lys blå</JnButton>
    <JnButton colorTheme="blue" light hasBorder>lys blå-border</JnButton>
    <JnButton colorTheme="blue" hasBorder caps>Mørk blå-border har caps</JnButton>
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
  <div>
    <h2>Med ikon</h2>
      <JnButton>Les mer<span class="fas fa-chevron-right" style="margin-left: 8px"></span></JnButton>
      <JnButton colorTheme="blue"><span class="fal fa-gift" style="margin-right: 8px"></span>Kjør disco</JnButton>
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
h1, h2 {
  margin-bottom: 1rem; 
}
</style>