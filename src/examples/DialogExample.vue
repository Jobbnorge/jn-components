<template>
  <div>
    <JnButton colorTheme="blue" @JnButton-clicked="openFluffModal"
      >Fluff data modal</JnButton
    >
    <JnButton colorTheme="blue" @JnButton-clicked="openPuffModal"
      >The other</JnButton
    >
    <JnDialogComponent
      v-bind="fluffData"
      @resolveModal="resolveModal"
      @rejectModal="rejectModal"
      v-if="isModalVisible"
    >
      <template #header>
        <p>I am the header with the pink theme</p>
      </template>
      <template #body>
        <div style="width: 600px"><p>BODY BODY</p></div>
      </template>
    </JnDialogComponent>
    <JnDialogComponent
      v-bind="puffData"
      @resolveModal="resolveModal"
      @rejectModal="rejectModal"
      v-if="isPuffModalVisible"
      key="puff"
    >
      <template #header>
        <p>I am the none themed header</p>
      </template>
      <template #body>
        <div style="width: 600px"><p>BODY BODY</p></div>
      </template>
    </JnDialogComponent>
  </div>
</template>

<script>
import JnDialogComponent from "./../ui_components/dialog/JnDialogComponent";
import JnButton from "../ui_components/buttons/JnButton";

export default {
  name: "DialogExample",
  components: {
    JnDialogComponent,
    JnButton,
  },
  data: function() {
    return {
      fluffData: {
        modalId: "fluffModal",
        rejectButton: {
          visible: true,
          text: "Avbryt",
        },
        resolveButton: {
          visible: true,
          text: "Fluff OK",
        },
        colorTheme: "pink"
      },
      puffData: {
        modalId: "puffModal",
        rejectButton: {
          visible: true,
          text: "Avbryt",
        },
        resolveButton: {
          visible: true,
          text: "Puff OK",
        },
        colorTheme: "none"
      },
      isModalVisible: false,
      isPuffModalVisible: false
    };
  },
  methods: {
    openFluffModal() {
      this.isModalVisible = true;
    },
    openPuffModal() {
      this.isPuffModalVisible = true;
    },
    resolveModal() {
      this.isModalVisible = false;
      this.isPuffModalVisible = false;
    },
    rejectModal() {
      this.isModalVisible = false;
      this.isPuffModalVisible = false;

    },
  },
};
</script>
<style scoped>
.modal-header-right {
  display: grid;
  justify-items: end;
}
</style>
