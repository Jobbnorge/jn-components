<template>
  <div class="time-grid">
    <label :for="id">{{ label }}</label>
    <input
      :id="id" 
      type="text"
      style="max-width: 80px;"
      @click="dropDown"
      readonly="readonly"
      v-model="getTime"
    />
    <div v-if="showPicker" class="dropdown-grid">
      <div class="close" @click="close">
        <FontAwesomeIcon :icon="faTimes" />
      </div>
      <div class="picker">
        <div>
          <label for="hour-picker" style="margin: 0.5rem;">{{
            hourLabel
          }}</label>
          <ul id="hour-picker" class="list">
            <li v-for="hour in hours" :key="hour" @click="selectHour(hour)">
              {{ hour }}
            </li>
          </ul>
        </div>
        <div>
          <label for="minute-picker" style="margin: 0.5rem;">{{
            minuteLabel
          }}</label>
          <ul id="minute-picker" class="list">
            <li v-for="min in minutes" :key="min" @click="selectMinute(min)">
              {{ min }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/pro-light-svg-icons";

fontAwesomeConfig.autoAddCss = false;

export default {
  name: "JnTimePicker",
  components: {
    FontAwesomeIcon,
  },
  props: {
    id: {
      type: String,
      default: "jn-time-picker"
    },
    label: {
      type: String,
      default: "",
    },
    hourLabel: {
      type: String,
      required: true,
    },
    minuteLabel: {
      type: String,
      required: true,
    },
    hours: {
      type: Number,
      default: () => [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
      ],
    },
    minutes: {
      type: Array,
      default: () => ["00", "15", "30", "45"],
    },
  },
  data() {
    return {
      showPicker: false,
      hour: "00",
      minute: "00",
      faTimes,
    };
  },
  computed: {
    getTime: function() {
      return `${this.hour}:${this.minute}`;
    },
  },
  methods: {
    dropDown: function() {
      this.showPicker = !this.showPicker;
    },
    selectHour: function(selectedHour) {
      this.hour = selectedHour;
    },
    selectMinute: function(selectedMinute) {
      this.minute = selectedMinute;
    },
    close: function() {
      if(this.showPicker === true) {
        this.showPicker = false; 
      }
    }
  },
};
</script>
<style scoped>
.close {
  padding: 0.5rem;
  justify-self: end;

}
.close:hover, .close:focus, .close:active {
  background: #ff6a6a; 
  color: var(--gray); 
}
svg {
  width: 1rem;
  height: 1rem;
}
ul {
  list-style: none;
  padding: 0;
}

.time-grid {
  display: grid;
}
.dropdown-grid {
  display: grid;
  width: fit-content;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  background: #ffffff;
}
.picker {
  display: grid;
  grid-template-columns: 100px 100px;
  align-items: baseline; 
}
.list {
  height: 100px;
  overflow-y: scroll;
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 0;
  border-top: 1px solid var(--lightGray);
}
.list li:hover {
  cursor: pointer;
  background: var(--lightBlue);
}
</style>
