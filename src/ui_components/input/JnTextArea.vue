<template>
  <div>
    <div class="flex">
      <label :for="id">{{ labelText }}:</label>
      <p v-bind:style="hasError ? 'color: red;' : 'color: #44303C'">
        {{ count() }}
      </p>
    </div>
    <textarea
      v-model="message"
      @blur="
        $emit('textarea-on-blur', {
          id: id,
          hasError: hasError,
          message: message,
        })
      "
      @focus="$emit('textarea-on-focus')"
      v-bind:style="`min-height: ${minHeight}px;`"
      :placeholder="placeholder"
      :text="text"
      :id="id"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 4000,
    },
    labelText: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    minHeight: {
      type: Number,
      default: 100,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      message: null,
      hasError: false,
    };
  },
  created() {
    this.message = this.text;
  },
  methods: {
    count: function() {
      var remainingCount = this.max - this.message.length;
      if (remainingCount > 0) {
        this.hasError = false;
      } else {
        this.hasError = true;
      }
      return `${this.message.length} / ${this.max}`;
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
textarea {
  width: 100%;
  padding: 0.3rem;
}
textarea:focus {
  outline: none !important;
  border: 2px solid #44303c;
  border-radius: 3px;
}
</style>
