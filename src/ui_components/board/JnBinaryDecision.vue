<template functional>
  <div class="jn-binary-decision-wrapper" v-bind:class="props.layout">
    <span>{{props.text}}</span>
    <div>
      <input
        type="radio"
        :id="`yes_${props.id}`"
        value="1"
        :name="`decision_${props.id}`"
        :checked="decision === 1"
        v-on="listeners"
      />
      <label :for="`yes_${props.id}`">
        <span :class="{'with-opacity' : props.decision !== 1}">
          <fa-icon :icon="['fas', 'thumbs-up']" />
        </span>
        <span class="ml-1">Ja</span>
      </label>
    </div>

    <div>
      <input
        type="radio"
        :id="`no_${props.id}`"
        value="0"
        :name="`decision_${props.id}`"
        :checked="decision === 0"
        v-on="listeners"
      />
      <label :for="`no_${props.id}`">
        <span :class="{'with-opacity' : props.decision !== 0}">
          <fa-icon :icon="['fas', 'thumbs-down']" />
        </span>
        <span class="ml-1">Nei</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,
  name: "JnBinaryDecision",
  props: {
    id: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    decision: {
      type: Number
    },
    layout: {
      type: String,
      default: "vertical"
    }
  }
};
</script>

<style scoped>
input {
  opacity: 0;
  position: absolute;
}
input,
label {
  cursor: pointer;
}
.with-opacity {
  opacity: 0.5;
}
.jn-binary-decision-wrapper {
  display: grid;
  align-items: center;
  justify-items: center;
}
.vertical {
    grid-template-rows: repeat(3, 1fr);
}
.horizontal {
  grid-template-columns: repeat(3, 1fr);
}
</style>