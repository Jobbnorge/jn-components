<template>
  <div class="wrapper">
    <JnCard title="Annonse">
      <template #content>
        <ul class="no-padding-ul">
          <JnListElement
            v-for="item in list1"
            :key="item.id"
            icon="file-alt"
            :title="item.title"
            :secondaryText="item.secondaryText"
            :isExternal="item.isExternal"
            :url="item.url"
            :borderBetweenElements="item.borderBetweenElements"
            :navigable="item.navigable"
          >
            <template #left-side>
              <Avatar
                :firstName="item.user.firstName"
                :lastName="item.user.lastName"
                :id="item.id"
              >
              </Avatar>
            </template>
          </JnListElement>
        </ul>
      </template>
      <template #button>
        <JnTextButton>Gå til annonser</JnTextButton>
      </template>
    </JnCard>
    <JnCard title="Dokumenter">
      <template #content>
        <ul class="no-padding-ul">
          <JnListElement
            v-for="item in list2"
            :key="item.id"
            icon="user-secret"
            :title="item.title"
            :secondaryText="item.secondaryText"
            :isExternal="item.isExternal"
            :url="item.url"
            :borderBetweenElements="item.borderBetweenElements"
            :navigable="item.navigable"
          >
          <template #right-side>
            <JnIconButton icon="download" size="lg" hasAnimation />
          </template>
          </JnListElement>
        </ul>
      </template>
      <template #button>
        <JnTextButton>Gå til dokumenter</JnTextButton>
      </template>
    </JnCard>
    <JnIconList :listItems="listItems" />
  </div>
</template>

<script>
import JnListElement from "./../ui_components/lists/JnListElement";
import JnCard from "./../ui_components/cards/JnCard";
import JnTextButton from "./../ui_components/buttons/JnTextButton";
import JnIconList from "./../ui_components/lists/JnIconList";
import JnIconButton from "./../ui_components/buttons/JnIconButton";
import Avatar from "./../ui_components/misc/Avatar"

export default {
  name: "demoList",
  components: {
    JnListElement,
    JnCard,
    JnTextButton,
    JnIconList,
    Avatar,
    JnIconButton
  },
  data() {
    return {
      list1: [
        {
          id: 1,
          isExternal: true,
          title: "Jobbnorge.no",
          secondaryText: "Publisert - 10 dager igjen",
          url: "https://jobbnorge.no",
          borderBetweenElements: true,
          navigable: true,
          user: {
            firstName: "Emmy",
            lastName: "Sortland"
          }
        },
        {
          id: 2,
          isExternal: true,
          title: "Jobbnorge.no",
          secondaryText: "Utgått - 2 dager siden",
          url: "https://jobbnorge.no",
          borderBetweenElements: true,
          navigable: true,
          user: {
            firstName: "Vilje",
            lastName: "Bech"
          }
        },
        {
          id: 3,
          isExternal: true,
          title: "Jobbnorge.no",
          secondaryText: "Publisert - 5 dager igjen",
          url: "https://jobbnorge.no",
          borderBetweenElements: true,
          navigable: true,
          user: {
            firstName: "Lars",
            lastName: "Eliassen"
          }
        }
      ],

      list2: [
        {
          id: 1,
          isExternal: false,
          title: "Innstillingsdokument (standard)",
          url: "https://jobbnorge.no",
          borderBetweenElements: false,
          
        },
        {
          id: 2,
          isExternal: false,
          title: "Avslagsbrev",
          url: "https://jobbnorge.no",
          borderBetweenElements: false,
          navigable: true
        },
        {
          id: 3,
          isExternal: false,
          title: "Tilbudsbrev",
          url: "https://jobbnorge.no",
          borderBetweenElements: false,
          navigable: true
        }
      ],
      listItems: {}
    };
  },
  created() {
    var vm = this;
    setTimeout(function() {
      vm.$set(vm.listItems, "hello", "info-circle");
      vm.$set(vm.listItems, "fluff puff hei", "briefcase");
    }, 1000);
  }
};
</script>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
.no-padding-ul {
  padding: 0;
}
</style>