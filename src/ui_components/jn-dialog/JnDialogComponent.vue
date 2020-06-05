<template>
  <transition name="modal-fade" @after-leave="$emit('modalClosed')">
    <div class="simple-modal-backdrop" v-if="displayModal">
      <div
        class="simple-modal"
        :id="modalId"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="header">
          <slot name="header">
            <h5 v-if="modalTitle" id="jnDialogModalLabel">{{ this.modalTitle }}</h5>
          </slot>
        </header>
        <section class="body">
          <slot name="body">{{this.modalBody}}</slot>
        </section>
        <footer class="footer">
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
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "JnDialogComponent",
  props: {
    modalId: {
      type: String,
      default: "jnDialogModal"
    },
    modalTitle: String,
    modalBody: String,
    rejectButton: {
      visible: Boolean,
      text: String
    },
    resolveButton: {
      visible: Boolean,
      text: String
    }
  },
  data: function() {
    return {
      displayModal: false
    };
  },
  mounted() {
    this.displayModal = true;
  },
  methods: {
    resolveModal() {
      this.displayModal = false;
      this.$emit("resolveModal");
    },
    rejectModal() {
      this.displayModal = false;
      this.$emit("rejectModal");
    },
    setOptions(opt) {
      Object.assign(this.$data, opt);
    }
  }
};
</script>
<style scoped>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.simple-modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.simple-modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: grid;
  grid-template-columns: auto;
  min-width: 300px;
}

.header {
  background-color: #127dac;
  color: #ffffff;
  padding: 1rem;
}
.simple-modal > .header > div {
  display: grid;
  grid-template-rows: auto;
  justify-items: end;
}

.footer {
  justify-self: end;
  padding: 1rem;
}

.body {
  position: relative;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #eeeeee;
}
</style>