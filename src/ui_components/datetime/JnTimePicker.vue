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
      <div class="close-x" @click="close"><span class="fal fa-times"></span></div>
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
export default {
  name: "JnTimePicker",
  props: {
    id: {
      type: String,
      default: "jn-time-picker",
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
      type: Array,
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
      minute: "00"
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
      this.updateTime();
    },
    selectMinute: function(selectedMinute) {
      this.minute = selectedMinute;
      this.updateTime();
    },
    close: function() {
      if (this.showPicker === true) {
        this.showPicker = false;
      }
    },
    updateTime: function() {
      this.$emit("time-updated", this.getTime);
    },
  },
};
</script>
<style scoped>
.close-x {
  justify-self: end;
  padding: 0.5rem; 
  line-height: 0.5;
  cursor: pointer; 
}
.close-x > span {
  font-size: 1rem;
}
.close-x:hover,
.close-x:focus,
.close-x:active {
  background: #ff6a6a;
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
