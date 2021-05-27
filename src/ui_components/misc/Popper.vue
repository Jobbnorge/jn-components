<template>
  <div>
    <div>
      <div v-bind:id="triggerId">
        <slot name="trigger"></slot>
      </div>
    </div>
    <div role="tooltip" v-bind:id="popperId" :class="{ 'jn-tooltip': tooltip }">
      <slot name="popper"></slot>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  name: "Popper",
  props: {
    config: {
      type: Object,
      default: () => ({
        placement: "top",
      }),
    },
    triggerId: {
      type: String,
      required: true,
    },
    popperId: {
      type: String,
      required: true,
    },
    tooltip: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      triggerEl: null,
      popperEl: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.triggerEl = document.querySelector(`#${this.triggerId}`);
      this.popperEl = document.querySelector(`#${this.popperId}`);
      this.setupPopper();
      this.onClickOutside();
    });
  },
  methods: {
    setupPopper() {
      createPopper(this.triggerEl, this.popperEl, this.config);
    },
    onClickOutside() {
      const listener = (e) => {
        if (e.target === this.$el || this.$el.contains(e.target)) {
          return;
        }

        this.$emit('outside-click')
      };

      document.addEventListener("click", listener);
      this.$once("hook:beforeDestroy", () => {
        document.removeEventListener("click", listener);
      });
    },
  },
};
</script>
<style scoped>
.jn-tooltip {
  display: inline-block;
  background: #ffffff;
  border: 1px solid #f6f5f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
}
</style>
