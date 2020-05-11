<template>
  <div>
    <div
      class="modal fade"
      id="jnDialogModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="jnDialogModalLabel"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="jnDialogModalLabel">{{ modalTitle }}</h5>
          </div>
          <div class="modal-body">{{ modalBody }}</div>
          <div class="modal-footer">
            <button
              v-if="rejectButton.visible"
              type="button"
              class="btn btn-secondary"
              @click="rejectModal"
            >{{ rejectButton.text }}</button>
            <button
              v-if="resolveButton.visible"
              type="button"
              class="btn btn-primary"
              @click="resolveModal"
            >{{ resolveButton.text }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JnDialogComponent",
  data: function() {
    return {
      display: false,
      modalTitle: "",
      modalBody: "",
      rejectButton: {
        visible: false,
        text: ""
      },
      resolveButton: {
        visible: false,
        text: ""
      }
    };
  },
  watch: {
    display: function(val) {
      if (val) {
        $(document).ready(() => $("#jnDialogModal").modal("show"));
      } else {
        $(document).ready(() => $("#jnDialogModal").modal("hide"));
      }
    }
  },
  methods: {
    resolveModal() {
      this.display = false;
      this.$emit("resolveModal");
    },
    rejectModal() {
      this.display = false;
      this.$emit("rejectModal");
    },
    setOptions(opt) {
      Object.assign(this.$data, opt);
    },
    showModal(_display) {
      this.display = _display;
    }
  }
};
</script>