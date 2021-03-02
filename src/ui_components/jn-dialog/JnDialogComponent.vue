<template>
  <transition name="modal-fade" @after-leave="$emit('modalClosed')">
    <div class="simple-modal-backdrop" v-if="displayModal">
      <div
        :class="['simple-modal', size]"
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
          <JnButton
            v-if="rejectButton.visible"
            @JnButton-clicked="rejectModal"
          >{{ this.rejectButton.text }}</JnButton>
          <JnButton
            colorTheme="blue"
            v-if="resolveButton.visible"
            @JnButton-clicked="resolveModal"
          >{{ this.resolveButton.text }}</JnButton>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import JnButton from "../buttons/JnButton"
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
    },
    size: {
      type: String,
      default: "medium",
      validator: function(value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    }
  },
  components: {
    JnButton
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
.footer > button {
  margin-left: 0.5rem; 
}

.body {
  position: relative;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #eeeeee;
}
</style>