<template>
  <div>
    <div>
      <div aria-describedby="tooltip" data-trigger>
        <slot name="trigger"></slot>
      </div>
    </div>
    <div role="tooltip" data-popper>
      <slot name="popper"></slot>
      <div id="arrow" data-popper-arrow></div>
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
  },
  data() {
    return {
      triggerEl: null,
      popperEl: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.triggerEl = document.querySelector("[data-trigger]");
      this.popperEl = document.querySelector("[data-popper]");
      this.setupPopper();
    });
  },
  methods: {
    setupPopper() {
      createPopper(this.triggerEl, this.popperEl, this.config);
    },
  },
};
</script>
<style scoped>
#tooltip {
  display: inline-block;
  background: var(--lightBlue);
  color: var(--gray);
  font-weight: bold;
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 4px;
}
#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

#arrow {
  visibility: hidden;
}

#arrow::before {
  visibility: visible;
  content: "";
  transform: rotate(45deg);
}

#tooltip[data-popper-placement^="top"] > #arrow {
  bottom: -4px;
}

#tooltip[data-popper-placement^="bottom"] > #arrow {
  top: -4px;
}

#tooltip[data-popper-placement^="left"] > #arrow {
  right: -4px;
}

#tooltip[data-popper-placement^="right"] > #arrow {
  left: -4px;
}
</style>
