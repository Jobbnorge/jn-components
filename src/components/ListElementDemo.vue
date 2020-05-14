<template>
  <div class="wrapper">
  <JnCard
      title="Annonse"
    >
      <template #content>
        <ul>
      <JnListElement
        isExternal= true
        title="Jobbnorge.no"
        secondaryText="Publisert - 10 dager igjen"
        icon="file-alt"
        url="https://jobbnorge.no"
        borderBetweenElements= true
        navigable= true
      >
      </JnListElement> </ul>
      </template>
      <!-- <JnListElement
        isExternal= true
        title="Jobbnorge.no"
        secondaryText="Utgått - 2 dager siden"
        icon="file-alt"
        url="https://jobbnorge.no"
        borderBetweenElements= true
        navigable= true
      >
      </JnListElement>
      <JnListElement
        isExternal= true
        title="Jobbnorge.no"
        secondaryText="Publisert - 10 dager igjen"
        icon="file-alt"
        url="https://jobbnorge.no"
        borderBetweenElements= true
        navigable= true
      >
      </JnListElement>
    </template>
    <template #button>
      <JnTextButton>Alle annonser</JnTextButton> -->
    <!-- </template>
    </JnCard>
    <JnCard
      title="Dokumenter"
    >
      <template #content>
      <JnListElement
        isExternal= false
        title="Innstillingsdokument (standard)"
        icon="user-secret"
        url="https://jobbnorge.no"
        navigable= true
      >
      </JnListElement>
      <JnListElement
        isExternal= false
        title="Tilbudsbrev"
        icon="user-secret"
        url="https://jobbnorge.no"
        navigable= true
      >
      </JnListElement>
      <JnListElement
        isExternal= false
        title="Avslagsbrev"
        icon="user-secret"
        url="https://jobbnorge.no"
        navigable= true
      >
      </JnListElement>
    </template> -->
    <template #button>
      <JnTextButton>Gå til dokumenter</JnTextButton>
    </template>
    </JnCard>
  </div>
</template>

<script>
import JnListElement from "./../ui_components/lists/JnListElement";
import JnCard from "./../ui_components/cards/JnCard"; 
import JnTextButton from './../ui_components/buttons/JnTextButton';

export default {
    name: "demoList",
    components:{
        JnListElement,
        JnCard,
        JnTextButton
    }
}
</script>
<style scoped>
  .wrapper {
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr;  
    gap: 1rem; 
  }
</style>