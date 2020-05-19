<template>
  <div class="boardlist">
    <div class="head">{{ name }}</div>
    <JnJobseekerMiniCard v-for="item in orderedItems" v-bind:key="item.key" v-bind="item" />
  </div>
</template>

<script>
import JnJobseekerMiniCard from "./JnJobseekerMiniCard";
import _ from "lodash";

export const ORDER_DIRECTION = {
  ASCENDING: 1,
  DESCENDING: 2
};

export default {
  name: "JnBoardList",
  components: {
    JnJobseekerMiniCard
  },
  props: {
    name: String,
    items: Array,
    orderby: String,
    direction: Number
  },
  computed: {
    orderedItems: function() {
      var vm = this;
      return _.orderBy(vm.items, vm.orderby, vm.direction);
    }
  }
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
