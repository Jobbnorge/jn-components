<template>
  <div>
    <JnButton colorTheme="blue" @JnButton-clicked="openFluffModal">Fluff data modal</JnButton>
    <JnDialogComponent
      v-bind="fluffData"
      @resolveModal="resolveModal"
      @rejectModal="rejectModal"
      v-if="isModalVisible"
    >
      <template #header>
        <p>I am the header</p>
      </template>
      <template #body>
        <div style="width: 600px"><p>BODY BODY</p></div>
      </template>
    </JnDialogComponent>
  </div>
</template>

<script>
import { jnDialog } from "./../ui_components/jn-dialog/jn-dialog";
import JnDialogComponent from "./../ui_components/jn-dialog/JnDialogComponent";
import CustomComp from "../ui_components/datetime/JnPickDateTime";
import JnButton from "../ui_components/buttons/JnButton";

export default {
  name: "DialogExample",
  components: {
    JnDialogComponent,
    JnButton
  },
  data: function() {
    return {
      fluffData: {
        modalId: "fluffModal",
        rejectButton: {
          visible: true,
          text: "Avbryt"
        },
        resolveButton: {
          visible: true,
          text: "Fluff OK"
        }
      },
      isModalVisible: false,
    };
  },
  methods: {
    openInfoModal() {
      jnDialog.info({ modalTitle: "Jeg er en info modal" });
    },
    openRichInfoModal() {
      jnDialog.richInfo(
        { modalTitle: "I am even richer" },
        {
          header: {
            node: "h1",
            data: { domProps: { innerHTML: "blue", className: "hello-class" } }
          },
          body: {
            node: CustomComp,
            data: {
              props: { colorTheme: "red" },
              domProps: { className: "fluff-class" }
            }
          }
        }
      );
    },
    openConfirmModal() {
      jnDialog
        .confirm()
        .then(suc => console.info(suc))
        .catch(err => console.warn(err));
    },
    openFluffModal() {
      this.isModalVisible = true;
    },
    resolveModal() {
      this.isModalVisible = false;
    },
    rejectModal() {
      this.isModalVisible = false;
    },
    itemClicked(option) {
      this.selected = option.text; 
    }
  }
};
</script>
<style scoped>
.modal-header-right {
  display: grid;
  justify-items: end;
}
</style>