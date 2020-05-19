<template>
  <div class="boardlist">
    <div class="head">{{ name }}</div>
    <JnJobseekerMiniCard
      v-for="item in items"
      v-bind:key="item.key"
      v-bind="item"
    />
  </div>
</template>

<script>
import JnJobseekerMiniCard from "./JnJobseekerMiniCard";

export const ORDER_DIRECTION = {
  ASCENDING: 1,
  DESCENDING: 2
}

export default {
  name: "JnBoardList",
  components: {
    JnJobseekerMiniCard,
  },
  props: {
    name: String,
    items: Array,
    orderby: String,
    direction: ORDER_DIRECTION
  },
  watch: {
    orderby: function () {
      this.orderby && this.direction && this.sort();
    },
    direction: function () {
      this.orderby && this.direction && this.sort();
    }
  },
  methods: {
    sort: function () {
      var vm = this;
      return vm.items.sort(
        (a, b) => a[vm.orderby].localeCompare(b[vm.orderby]) * vm.direction
      );
    },
  },
};
</script>

<style scoped>
.boardlist {
  background-color: #eee;
  border-radius: 3px;
  overflow: hidden;
}

.head {
  font-size: 0.9em;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 1em;
  text-align: center;
  text-transform: uppercase;
  color: #1d764f;
  background-color: #d3f5df;
  margin-bottom: 1em;
}
</style>
