<template>
  <div class="wrapper">
  <JnCard
      title="Annonse"
    >
      <template #content>
        <ul class="no-padding-ul">
      <JnListElement
      v-for="item in list1"
      :key="item.id"
        icon= "file-alt"
        :title= item.title
        :secondaryText= item.secondaryText
        :isExternal= item.isExternal
        :url= item.url
        :borderBetweenElements= item.borderBetweenElements
        :navigable= item.navigable
      >
      </JnListElement> 
      </ul> 
      </template>
      <template #button>
      <JnTextButton>Gå til annonser</JnTextButton>
    </template>
  </JnCard>
  <JnCard
      title="Dokumenter"
    >
      <template #content>
        <ul class="no-padding-ul">
      <JnListElement
      v-for="item in list2"
      :key="item.id"
        icon= "user-secret"
        :title= item.title
        :secondaryText= item.secondaryText
        :isExternal= item.isExternal
        :url= item.url
        :borderBetweenElements= item.borderBetweenElements
        :navigable= item.navigable
      >
      </JnListElement> 
      </ul> 
      </template>
      <template #button>
      <JnTextButton>Gå til dokumenter</JnTextButton>
    </template>
  </JnCard>
  <JnIconList :listItems="details" />
   
  </div>
</template>

<script>
import JnListElement from "./../ui_components/lists/JnListElement";
import JnCard from "./../ui_components/cards/JnCard"; 
import JnTextButton from './../ui_components/buttons/JnTextButton';
import JnIconList from './../ui_components/lists/JnIconList'; 

export default {
    name: "demoList",
    components:{
        JnListElement,
        JnCard,
        JnTextButton,
        JnIconList
    },
    data() {
        return {
          list1: [
            {
              id:1,
              isExternal: true,
              title:"Jobbnorge.no",
              secondaryText:"Publisert - 10 dager igjen",
              url:"https://jobbnorge.no",
              borderBetweenElements: true,
              navigable: true
            },
            {
              id:2,
              isExternal: true,
              title:"Jobbnorge.no",
              secondaryText:"Utgått - 2 dager siden",
              url:"https://jobbnorge.no",
              borderBetweenElements: true,
              navigable: true
            },
            {
              id:3,
              isExternal: true,
              title:"Jobbnorge.no",
              secondaryText:"Publisert - 5 dager igjen",
              url:"https://jobbnorge.no",
              borderBetweenElements: true,
              navigable: true
            }
          ],
        
        list2: [
          {
            id:1,
              isExternal: false,
              title:"Innstillingsdokument (standard)",
              url:"https://jobbnorge.no",
              borderBetweenElements: false,
              navigable: true
          },
          {
            id:2,
              isExternal: false,
              title:"Avslagsbrev",
              url:"https://jobbnorge.no",
              borderBetweenElements: false,
              navigable: true
          },
          {
            id:3,
              isExternal: false,
              title:"Tilbudsbrev",
              url:"https://jobbnorge.no",
              borderBetweenElements: false,
              navigable: true
          },
        ],
        details: {
            birthday: ["10.06.1977", "calendar-alt"],
            title: ["Lite Original", "briefcase"],
            email: ["test@test.no", "envelope"],
            phone: ["123456789", "phone"]
        }
      }
    }
}
</script>
<style scoped>
  .wrapper {
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr;  
    gap: 1rem; 
  }
  .no-padding-ul{
    padding: 0;
  }
</style>