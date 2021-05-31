<template>
  <div :class="['circle', 'badge', getFlagColor(flagName)]">
    <span :class="[getFlagIcon(flagName)]"></span>
  </div>
</template>
<script>
export default {
  name: "ApplicationFlag",
  props: {
    flagName: {
      type: String,
      validator: function(value) {
        return (
          [
            "isQualified",
            "isNotQualified",
            "isCalledForInterview",
            "priority",
            "hasReferenceCheck",
            "isHired",
            "isRejected",
            "setInterview",
            "setPriority",
            "setReferenceCheck",
            "setHired",
          ].indexOf(value) !== -1
        );
      },
    },
  },
  methods: {
    getFlagIcon(name) {
      switch (name) {
        case "isQualified":
          return "fal fa-thumbs-up";
        case "isNotQualified":
          return "fal fa-thumbs-down";
        case "isCalledForInterview":
        case "setInterview":
          return "fal fa-user-friends";
        case "priority":
        case "setPriority":
          return "fal fa-list-ol";
        case "hasReferenceCheck":
        case "setReferenceCheck":
          return "fal fa-check-double";
        case "isHired":
        case "setHired":
          return "fal fa-handshake";
        case "isRejected":
          return "fal fa-handshake-slash";
      }
    },
    getFlagColor: function(name) {
      switch (name) {
        case "isQualified":
          return "blue";
        case "isNotQualified":
          return "gray";
        case "isCalledForInterview":
        case "setInterview":
          return "pink";
        case "priority":
        case "setPriority":
          return "pink";
        case "hasReferenceCheck":
        case "setReferenceCheck":
          return "blue";
        case "isHired":
        case "setHired":
          return "green";
        case "isRejected":
          return "gray";
      }
    },
  },
};
</script>
<style scoped>
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
  width: 3em;
  margin: auto;
  border-radius: 50%;
  text-align: center;
  box-sizing: border-box;
}
</style>
