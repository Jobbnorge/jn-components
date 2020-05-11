<template>
  <div class="wrapper">
  <JnCard
      title="Annonse"
    >
      <template #content>
      <JnList
        linkType="external"
        title="Jobbnorge.no"
        secondaryText="Publisert - 10 dager igjen"
        icon="file-alt"
        url="https://jobbnorge.no"
        extendedList= true
      >
      </JnList>
      <JnList
        linkType="external"
        title="Jobbnorge.no"
        secondaryText="Utgått - 2 dager siden"
        icon="file-alt"
        url="https://jobbnorge.no"
        extendedList= true
      >
      </JnList>
      <JnList
        linkType="external"
        title="Jobbnorge.no"
        secondaryText="Publisert - 10 dager igjen"
        icon="file-alt"
        url="https://jobbnorge.no"
        extendedList= true
      >
      </JnList>
    </template>
    <template #button>
      <JnTextButton>Alle annonser</JnTextButton>
    </template>
    </JnCard>
    <JnCard
      title="Dokumenter"
    >
      <template #content>
      <JnList
        linkType="internal"
        title="Innstillingsdokument (standard)"
        icon="user-secret"
        url="https://jobbnorge.no"
      >
      </JnList>
      <JnList
        linkType="internal"
        title="Tilbudsbrev"
        icon="user-secret"
        url="https://jobbnorge.no"
      >
      </JnList>
      <JnList
        linkType="internal"
        title="Avslagsbrev"
        icon="user-secret"
        url="https://jobbnorge.no"
      >
      </JnList>
    </template>
    <template #button>
      <JnTextButton>Gå til dokumenter</JnTextButton>
    </template>
    </JnCard>
  </div>
</template>

<script>
import JnList from "./../ui_components/lists/JnList";
import JnCard from "./../ui_components/cards/JnCard"; 
import JnTextButton from './../ui_components/buttons/JnTextButton';

export default {
    name: "demoList",
    components:{
        JnList,
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