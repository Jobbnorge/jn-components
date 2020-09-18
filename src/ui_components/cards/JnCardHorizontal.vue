<template>
  <div class="jn-card-hor">
    <div class="main-frame" v-bind:class="GetBackground(this.colorTheme, true)">
      <div v-if="icon==null" :class="{'has-subtitle': mainFrameSubtitle != undefined}">
        <span>{{mainFrameTitle}}</span>
        <span v-if="mainFrameSubtitle">{{mainFrameSubtitle}}</span>
      </div>
      <div v-else :style="{padding: `${iconPadding}px`}">
        <FontAwesomeIcon :icon="icon" />
      </div>
    </div>
    <div class="frame second-frame" v-bind:class="GetBackground(this.colorTheme, false)">
      <h5 class="txt-black" :class="GetFontSize()">{{secondFrameTitle}}</h5>
      <span
        class="top-right-text"
        v-bind:class="GetTextColor(this.colorTheme)"
      >{{secondFrameTopText}}</span>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";

fontAwesomeConfig.autoAddCss = false;

export default {
  name: "JnCardHorizontal",
  components: {
    FontAwesomeIcon
  },
  props: {
    mainFrameTitle: String,
    mainFrameSubtitle: String,
    secondFrameTitle: String,
    secondFrameTopText: String,
    secondFrameFontSize: {
      type: String,
      default: "medium",
    },
    colorTheme: String,
    icon: Object,
    /** Used to set the size of the icon. The larger the padding the smaller the icon.*/
    iconPadding: {
      type: Number,
      default: 18
    }
  },
  methods: {
    GetBackground: function (color, mainFrame) {
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
    GetTextColor: function (color) {
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
    },
    GetFontSize() {
      switch (this.secondFrameFontSize) {
        case "small": {
          return "font-size-small";
        }
        case "medium": {
          return "font-size-medium";
        }
        case "large": {
          return "font-size-large";
        }
      }
    },
  },
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
.main-frame > div {
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
}
.main-frame > div.has-subtitle {
  grid-template-rows: 1fr 1fr;
}
.main-frame > div.has-subtitle span:first-child {
  align-self: end;
}
.main-frame > div.has-subtitle span:last-child {
  align-self: start;
  text-align: center;
}
.main-frame > div > :first-child {
  font-size: 1.5625em;
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

.font-size-small {
  font-size: 1em;
}

.font-size-medium {
  font-size: 1.2em;
}

.font-size-large {
  font-size: 1.4em;
}
</style>