<template>
  <transition name="modal-fade">
    <div class="simple-modal-backdrop">
      <div class="simple-modal"
        role="dialog"
        :id="id"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="header"
          id="modalTitle"
        >
          <slot name="header">
            This is the default tile!
          </slot>
        </header>
        <section
          class="body"
          id="modalDescription"
        >
          <slot name="body">
            I'm the default body!
          </slot>
        </section>
        <footer class="footer">
          <slot name="footer">
            <button
              type="button"
              class="btn btn-primary"
              @click="ok"
              aria-label="Resolve modal"
            >
            Ok!            
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
    export default {
        name: "JnSimpleModal",
        props: {
          id: String 
        },
        methods: {
            close() {
                this.$emit('close'); 
            },
            ok() {
                this.$emit('ok')
            }
        }
    }
</script>
<style scoped>
 .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
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
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: grid;
    grid-template-columns: auto;
    min-width: 300px; 
  }

  .header {
    background-color: #127dac;
    color: #FFFFFF;
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