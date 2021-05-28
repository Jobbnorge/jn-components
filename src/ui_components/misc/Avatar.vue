<template>
  <div class="initials" :class="colorClass" @click="$emit('avatarClicked')">
    <span v-if="anonymized" class="fal fa-user-secret" />
    <span v-else>{{ initials }}</span>
  </div>
</template>

<script>

export default {
  name: "JnAvatar",
  props: {
    firstName: String,
    lastName: String,
    fullName: String,
    rawText: String,
    color: String,
    id: Number,
    clickable: {
      type: Boolean,
      default: false,
    },
    hoverable: {
      type: Boolean,
      default: false,
    },
    anonymized: {
      type: Boolean,
      default: false,
    },
  },
  data: function() {
    return {
      colors: ["pink", "green", "blue", "grey"],
    };
  },
  methods: {
    colorfromindex: function() {
      return this.colors[this.id % this.colors.length];
    },
  },
  computed: {
    initials: (vm) => {
      if (vm.fullName) {
        const names = vm.fullName.split(" ");
        return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`;
      } else if (vm.rawText) {
        return vm.rawText;
      } else {
        var firstNameInitials = vm.firstName.split(/[\s-]/)
          .map((n) => n.charAt(0))
          .join("");
        var lastNamesInitials = vm.lastName.split(/[\s-]/)
          .map((n) => n.charAt(0))
          .join("");

        return `${firstNameInitials}${lastNamesInitials}`;
      }
    },
    colorClass: (vm) => {
      var color = vm.color || vm.colorfromindex();
      if (vm.clickable) {
        return `click ${color} `;
      } else if (vm.hoverable) {
        return `hoverable ${color}`;
      } else {
        return color;
      }
    },
  },
};
</script>

<style scoped>
.initials {
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
.click {
  cursor: pointer;
}

.pink {
  background: #ffeef6;
  color: #d41472;
  border: 1px solid transparent;
}
.click.pink:hover {
  border: 1px solid #d41472;
}

.grey {
  background: #f6f5f6;
  color: #44303c;
  border: 1px solid transparent;
}
.click.grey:hover {
  border: 1px solid #44303c;
}

.blue {
  background: #e8f5fa;
  color: #127dac;
  border: 1px solid transparent;
}
.click.blue:hover {
  border: 1px solid #127dac;
}

.green {
  background: #d3f5df;
  color: #1d764f;
  border: 1px solid transparent;
}
.click.green:hover {
  border: 1px solid #1d764f;
}
.hoverable {
  cursor: pointer;
}
.svg-inline--fa {
  width: 1.5em;
  height: 1.5em;
}
</style>
