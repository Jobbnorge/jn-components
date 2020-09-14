<template>
  <div class="counter">
    <button class="btn pad darken-hover animate" type="button" @click="decrement">
      <FontAwesomeIcon :icon="faChevronUp" />
    </button>
    <button
      class="text-xxl btn pad darken-hover animate"
      type="button"
      @click="openModal"
    >{{showNumber}}</button>
    <button class="btn pad darken-hover animate" type="button" @click="increment">
      <FontAwesomeIcon :icon="faChevronDown" />
    </button>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp, faChevronDown } from "@fortawesome/pro-light-svg-icons";

fontAwesomeConfig.autoAddCss = false;

export default {
  name: "JnCounter",
  components: {
    FontAwesomeIcon,
  },
  props: {
    startAt: Number,
    max: Number,
    min: Number,
    step: Number,
    message: String,
  },
  data() {
    return {
      counter: 0,
      showNumber: "-",
      incrementBy: 1,
      down: "decrement",
      faChevronUp,
      faChevronDown,
    };
  },
  created() {
    this.counter = this.startAt;

    if (this.step) {
      this.incrementBy = this.step;
    }
  },
  methods: {
    increment() {
      if (this.counter < this.max) {
        this.counter += this.incrementBy;
      }

      this.showNumber = this.counter;
    },
    decrement() {
      if (this.counter > this.min) {
        this.counter -= this.incrementBy;
      }
      this.showNumber = this.counter;
    },
    openModal() {
      console.log("modal open");
    },
  },
};
</script>
<style scoped>
.counter {
  display: grid;
  justify-items: center;
}
.text-xxl {
  font-size: 3rem;
}
.pad {
  padding: 0.5rem 0.65rem;
}
.darken-hover:hover {
  background: rgba(0, 0, 0, 0.1);
}
.animate {
  transition: all 0.2s ease-in;
}
.animate:hover {
  transform: scale(1.03);
}
.animate:active {
  transform: scale(0.9);
}
.svg-inline--fa {
  width: 18px;
  height: 18px;
  display: inline-block;
}
</style>