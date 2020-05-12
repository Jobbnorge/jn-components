<template>
  <div class="jn-card-hor">
    <div class="frame main-frame" v-bind:class="GetBackground(this.colorTheme, true)">
      <h1 v-if="icon==null">{{mainFrameTitle}}</h1>
      <h1>
        <fa-icon :icon="['fal', this.icon]" />
      </h1>
    </div>
    <div class="frame second-frame" v-bind:class="GetBackground(this.colorTheme, false)">
      <h5 class="txt-black">{{secondFrameTitle}}</h5>
      <span
        class="top-right-text"
        v-bind:class="GetTextColor(this.colorTheme)"
      >{{secondFrameTopText}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "JnCardHorizontal",
  props: {
    mainFrameTitle: String,
    secondFrameTitle: String,
    secondFrameTopText: String,
    colorTheme: String,
    icon: String
  },
  methods: {
    GetBackground: function(color, mainFrame) {
      if (color == "black") console.log(this.icon);

      switch (color) {
        case "red":
          return mainFrame ? "bg-red" : "bg-red-secondary";
        case "blue":
          return mainFrame ? "bg-blue" : "bg-blue-secondary";
        case "green":
          return mainFrame ? "bg-green" : "bg-green-secondary";
        case "black":
          return mainFrame ? "bg-black" : "bg-black-secondary";
      }
    },
    GetTextColor: function(color) {
      switch (color) {
        case "red":
          return "txt-red";
        case "blue":
          return "txt-blue";
        case "green":
          return "txt-green";
        case "black":
          return "txt-black";
      }
    }
  }
};
</script>

<style scoped>
.jn-card-hor {
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100%;
}

.frame {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;
}

.top-right-text {
  position: absolute;
  top: 4px;
  right: 8px;
  font-size: 12px;
}

.main-frame {
  color: #fff;
}
.txt-green {
  color: #1d764f;
}

.txt-blue {
  color: #127dac;
}

.txt-black {
  color: #44303c;
}

.txt-red {
  color: #d41472;
}

.bg-green {
  background: #1d764f;
}

.bg-green-secondary {
  background: #d3f5df;
}

.bg-blue {
  background: #127dac;
}

.bg-blue-secondary {
  background: #e8f5fa;
}

.bg-red {
  background: #d41472;
}

.bg-red-secondary {
  background: #ffeef6;
}

.bg-black {
  background: #44303c;
}

.bg-black-secondary {
  background: #f6f5f6;
}
</style>