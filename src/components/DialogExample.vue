<template>
  <div>
    <button class="btn btn-primary" type="button" @click="openInfoModal">Info-Modal</button>
    <button class="btn btn-primary" type="button" @click="openRichInfoModal">Rich info Modal</button>
    <button class="btn btn-primary" type="button" @click="openConfirmModal">Confirm-Modal</button>
    <button class="btn btn-primary" type="button" @click="openFluffModal">Use component in body</button>

    <JnDialogComponent v-bind="fluffData" @resolveModal="resolveModal" @rejectModal="rejectModal">
      <template #header>
        <p>I am the header</p>
      </template>
      <template #body>
          <JnDropDownBtn text="No anchor-tag" type="event" :options='[{text: "hello"}, {text: "hello 2"}]' @itemClicked="itemClicked" />
      </template>
    </JnDialogComponent>

    <h2>Simple Modal</h2>
    <p>Is just an empty shell of slots with @ok and @close events where v-show toggles visibility (display: none)</p>
      <button
      type="button"
      class="btn btn-primary"
      @click="openSimpleModal"
    >
      Open Modal!
    </button>
    <JnSimpleModal 
      v-show="isModalVisible"
      @close="closeSimpleModal"
      @ok="resolveSimpleModal"
    >
    <template #header>
      <div class="modal-header-right">
        <button
              type="button"
              class="btn"
              @click="closeSimpleModal"
              aria-label="Close modal"
        >
        <fa-icon :icon="['fas', 'times']" />
        </button>
      </div>
    </template>
    <template #body>
      <p>The body</p>
    </template>
    </JnSimpleModal>
  </div>
</template>

<script>
import { jnDialog } from "./../ui_components/jn-dialog/jn-dialog";
import JnDialogComponent from "./../ui_components/jn-dialog/JnDialogComponent";
import CustomComp from "../ui_components/datetime/JnPickDateTime";
import JnSimpleModal from "../ui_components/jn-dialog/JnSimpleModal"; 
import JnDropDownBtn from "../ui_components/buttons/JnDropDownBtn"

export default {
  name: "DialogExample",
  components: {
    JnDialogComponent,
    JnSimpleModal,
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
            data: {props: { colorTheme: "red" }, domProps: {className: "fluff-class"}}
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
    },
    openSimpleModal() {
      this.isModalVisible = true
    },
    closeSimpleModal() {
      this.isModalVisible = false;
      //do stuff on 'close' / 'cancel'
    },
    resolveSimpleModal() {
      this.isModalVisible = false
      //do stuff on 'ok'
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