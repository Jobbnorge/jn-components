<template>
  <div>
    <button class="btn btn-primary" type="button" @click="openInfoModal">Info-Modal</button>
    <button class="btn btn-primary" type="button" @click="openConfirmModal">Confirm-Modal</button>
    <button class="btn btn-primary" type="button" @click="openFluffModal">Fluff-Modal</button>

    <JnDialogComponent v-bind="fluffData" @resolveModal="resolveModal">
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
        modalTitle: "hei",
        modalBody: "fluff",
        size: "",
        rejectButton: {
          visible: false,
          text: ""
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
    }
  }
};
</script>