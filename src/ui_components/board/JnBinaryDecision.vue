<template>
  <div class="jn-binary-decision-wrapper" v-bind:class="layout">
    <span>{{text}}</span>
    <div>
      <input
        type="radio"
        :id="`yes_${id}`"
        value="1"
        :name="`decision_${id}`"
        :checked="decision === 1"
        @click="$emit('clicked-decision', $event)"
      />
      <label :for="`yes_${id}`">
        <span :class="{'with-opacity' : decision !== 1}">
          <FontAwesomeIcon :icon="faThumbsUp" />
        </span>
        <span class="ml-1">Ja</span>
      </label>
    </div>

    <div>
      <input
        type="radio"
        :id="`no_${id}`"
        value="0"
        :name="`decision_${id}`"
        :checked="decision === 0"
        @click="$emit('clicked-decision', $event)"
      />
      <label :for="`no_${id}`">
        <span :class="{'with-opacity' : decision !== 0}">
          <FontAwesomeIcon :icon="faThumbsDown" />
        </span>
        <span class="ml-1">Nei</span>
      </label>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faThumbsDown } from "@fortawesome/pro-light-svg-icons";

fontAwesomeConfig.autoAddCss = false;

export default {
  name: "JnBinaryDecision",
  components: {
    FontAwesomeIcon,
  },
  data: function () {
    return {
      faThumbsUp,
      faThumbsDown,
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    decision: {
      type: Number,
    },
    /**
     * Kan velge vertical eller horizontal
     */
    layout: {
      type: String,
      default: "vertical",
    },
  },
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
.svg-inline--fa {
  width: 18px;
  height: 18px;
  display: inline-block;
}
</style>