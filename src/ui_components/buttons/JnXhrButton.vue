<template functional>
    <button
    type="button"
    :class="`btn btn-primary ${data.staticClass}`"
    v-on="listeners"
    v-bind="data.attrs"
  >
    <span v-show="props.loading" class="icon-spinner2 spinner mr-2"></span>
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  functional: true,
  name: "JnXhrButton",
  props: {
    loading: Boolean
  }
};
</script>