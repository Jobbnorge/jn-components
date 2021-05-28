<template>
  <Popper :config="{placement: dropUp ? 'top':'bottom'}" :triggerId="`trigger-${id}`" :popperId="`popper-${id}`" dropDown>
    <template #trigger>
      <button
        class="btn icon-button"
        v-bind:class="{ bg: isPrimary, 'border-blue': showOptions }"
        @click="showOptions = !showOptions"
      >
        {{ text }}
        <span
          v-bind:class="[
            dropUp ? 'fal fa-chevron-up' : 'fal fa-chevron-down',
            { 'fa-rotate-180': showOptions },
          ]"
        ></span>
      </button>
    </template>
    <template #popper v-if="showOptions">
      <div class="drop-items">
        <ul>
          <li
            v-for="option in options"
            :key="option.id"
            @click="$emit.event('item-clicked', option)"
          >
            {{ option.text }}
          </li>
        </ul>
      </div>
    </template>
  </Popper>
</template>

<script>
export default {
  name: "JnDropDownBtn",
  data() {
    return {
      showOptions: false,
    };
  },
  props: {
    text: String,
    isPrimary: Boolean,
    dropUp: {
      type: Boolean,
      default: false,
    },
    options: Array,
    id: String
  }
};
</script>

<style scoped>
.bg {
  background: #e8f5fa;
}
.border-blue {
  border: 1px solid var(--blue);
}
.icon-button
  .icon-button:link
  .icon-button:visited
  .icon-button:hover
  .icon-button:active {
  color: #44303c;
}
.icon-button:hover {
  background: #e8f5fa;
}
.btn {
  color: inherit;
  text-transform: none;
  box-shadow: none !important;
  font-size: 0.8125rem;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid transparent;
}
.drop-items {
  background: #ffffff;
  width: 200px;
}
li {
  padding: 0.5rem;
  cursor: pointer;
}
li:hover {
  background: #ccc;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0; 
}
.fa-rotate-180 {
  transform: rotateX(180deg);
}
</style>
