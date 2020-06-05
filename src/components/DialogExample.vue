<template>
  <div>
    <button class="btn btn-primary" type="button" @click="openInfoModal">Info-Modal</button>
    <button class="btn btn-primary" type="button" @click="openRichInfoModal">Rich info Modal</button>
    <button class="btn btn-primary" type="button" @click="openConfirmModal">Confirm-Modal</button>
    <button class="btn btn-primary" type="button" @click="openFluffModal">Use component in body</button>

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
          <JnDropDownBtn :text="selected" type="event" :options='[{text: "hello"}, {text: "hello 2"}]' @itemClicked="itemClicked" />
      </template>
    </JnDialogComponent>
  </div>
</template>

<script>
import { jnDialog } from "./../ui_components/jn-dialog/jn-dialog";
import JnDialogComponent from "./../ui_components/jn-dialog/JnDialogComponent";
import CustomComp from "../ui_components/datetime/JnPickDateTime";
import JnDropDownBtn from "../ui_components/buttons/JnDropDownBtn";

export default {
  name: "DialogExample",
  components: {
    JnDialogComponent,
    JnDropDownBtn
  },
  data: function() {
    return {
      fluffData: {
        modalId: "fluffModal",
        display: false,
        modalBody: "fluff",
        modalTitle: "",
        size: "large",
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
      selected: "Velg noe"

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