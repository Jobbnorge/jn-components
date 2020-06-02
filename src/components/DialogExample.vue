<template>
  <div>
    <button class="btn btn-primary" type="button" @click="openInfoModal">Info-Modal</button>
    <button class="btn btn-primary" type="button" @click="openRichInfoModal">Rich info Modal</button>
    <button class="btn btn-primary" type="button" @click="openConfirmModal">Confirm-Modal</button>
    <button class="btn btn-primary" type="button" @click="openFluffModal">Fluff-Modal</button>

    <JnDialogComponent v-bind="fluffData" @resolveModal="resolveModal" @rejectModal="rejectModal">
      <template #header>
        <p>I am the header</p>
      </template>
      <template #body>
        <div>
          <p>hello jeg kan være en hvilken som helst komponente :P</p>
        </div>
      </template>
    </JnDialogComponent>
  </div>
</template>

<script>
import { jnDialog } from "./../ui_components/jn-dialog/jn-dialog";
import JnDialogComponent from "./../ui_components/jn-dialog/JnDialogComponent";
import CustomComp from "../ui_components/datetime/JnPickDateTime";

export default {
  name: "DialogExample",
  components: {
    JnDialogComponent
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
      }
    };
  },
  methods: {
    openInfoModal() {
      jnDialog.info({ modalTitle: this.$t("modal.modalTitle") });
    },
    openRichInfoModal() {
      jnDialog.richInfo(
        { modalTitle: "I am even richer" },
        {
          header: {
            node: "h1",
            data: {domProps: { innerHTML: "blue", className: "hello-class" }}
          },
          body: {
            node: CustomComp,
            data: {componentProps: { colorTheme: "red" }}
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
      this.fluffData.display = true;
    },
    resolveModal() {
      this.fluffData.display = false;
    },
    rejectModal() {
      this.fluffData.display = false;
      //do other stuff
    }
  }
};
</script>