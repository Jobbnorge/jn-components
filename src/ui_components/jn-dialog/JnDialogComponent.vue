<template>
  <div>
    <div
      class="modal fade"
      :id="modalId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="jnDialogModalLabel"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog" role="document" v-bind:class="getSize(this.size)">
        <div class="modal-content">
          <div class="modal-header primary">
            <slot name="header">
              <h5 v-if="modalTitle" class="modal-title" id="jnDialogModalLabel">{{ this.modalTitle }}</h5>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">{{this.modalBody}}</slot>
          </div>
          <div class="modal-footer">
            <button
              v-if="rejectButton.visible"
              type="button"
              class="btn btn-secondary"
              @click="rejectModal"
            >{{ this.rejectButton.text }}</button>
            <button
              v-if="resolveButton.visible"
              type="button"
              class="btn btn-primary"
              @click="resolveModal"
            >{{ this.resolveButton.text }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JnDialogComponent",
  props: {
    modalId: {
      type: String,
      default: "jnDialogModal"
    },
    display: Boolean,
    modalTitle: String,
    modalBody: String,
    size: String,
    rejectButton: {
      visible: Boolean,
      text: String
    },
    resolveButton: {
      visible: Boolean,
      text: String
    }
  },
  mounted() {
    var vm = this;
    $(document).ready(() =>
      $(`#${this.modalId}`).on("hidden.bs.modal", () => vm.$emit("modalClosed"))
    );
  },
  watch: {
    display: function(val) {
      if (val) {
        $(document).ready(() => $(`#${this.modalId}`).modal("show"));
      } else {
        $(document).ready(() => $(`#${this.modalId}`).modal("hide"));
      }
    }
  },
  methods: {
    resolveModal() {
      this.$emit("resolveModal");
    },
    rejectModal() {
      this.$emit("rejectModal");
    },
    setOptions(opt) {
      Object.assign(this.$data, opt);
    },
    getSize(size) {
      switch (size) {
        case "large":
          return "modal-lg";
        case "small":
          return "modal-sm";
      }
    }
  }
};
</script>
<style>
  .primary {
    background-color: #127dac; 
    color: #fff; 
    padding-bottom: 0.5rem; 
  }
</style>