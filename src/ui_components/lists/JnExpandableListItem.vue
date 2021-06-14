<template>
  <li>
    <div
      :class="['list-title', computedColorThemeStyle]"
      @click="toggleContent"
    >
      <p>{{ title }}</p>
      <p v-if="secondaryText && largeScreen">{{ secondaryText }}</p>
      <span
        :class="['fal', isOpen ? 'fa-chevron-up' : 'fa-chevron-down']"
      ></span>
    </div>
    <CollapseTransition>
      <div class="content" v-show="isOpen">
        <slot></slot>
      </div>
    </CollapseTransition>
  </li>
</template>
<script>

import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue";
export default {
  components: {
    CollapseTransition
  },
  props: {
    title: String,
    secondaryText: String,
    id: String,
    colorTheme: {
      type: String,
      required: true,
      validator: function(value) {
        return ["blue", "pink", "gray", "green"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    computedColorThemeStyle: function() {
      if (this.isOpen) {
        return `${this.colorTheme}`;
      }
      return "";
    },
    largeScreen: function() {
      if (document.documentElement.clientWidth > 768) {
        return true;
      }
      return false;
    },
  },
  methods: {
    toggleContent() {
      this.isOpen = !this.isOpen;
      if (this.isOpen == true) {
        this.$emit("listItem-open", this.id);
      }
    },
  },
};
</script>
<style scoped>
.list-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-bottom: 1px solid #72616C;
  border-radius: 3px 3px 0 0;
  color: var(--gray); 
}
.list-title p {
  margin-bottom: 0;
}
.content {
  background: #fff;
  display: contents; 
}
.blue {
  background: var(--lightBlue);
}
.green {
  background: var(--lightGreen);
}
.pink {
  background: var(--pink);
}
.gray {
  background: var(--gray); 
}
</style>
