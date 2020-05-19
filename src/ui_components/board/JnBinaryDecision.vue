<template functional>
  <div class="jn-binary-decision-wrapper">
    <span>{{props.text}}</span>
    <div>
      <input
        type="radio"
        id="yes"
        value="1"
        name="decision"
        :checked="decision === 1"
        v-on="listeners"
      />
      <label for="yes">
        <span :class="{'with-opacity' : props.decision !== 1}">
          <fa-icon :icon="['fas', 'thumbs-up']" />
        </span>
        <span class="ml-1">Ja</span>
      </label>
    </div>

    <div>
      <input
        type="radio"
        id="no"
        value="0"
        name="decision"
        :checked="decision === 0"
        v-on="listeners"
      />
      <label for="no">
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
    text: {
        type: String,
        required
    },
    decision: {
        type: Number,
        required
    }
  }
};
</script>

<style scoped>
input {
  opacity: 0;
  position: absolute;
}
input, label {
    cursor: pointer;
}
.with-opacity {
  opacity: 0.5;
}
.jn-binary-decision-wrapper {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
}
</style>