<template>
  <div>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <div class="task">
          <input v-model="task.completed" type="checkbox" :id="task.id" @change="toggle(task)" />
          <label v-bind:class="{ completed : task.completed }" :for="task.name">{{task.name}}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "JnTaskList",
  props: {
    tasks: Array,
    toggle: { type: Function },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

label.completed {
  text-decoration: line-through;
}

.task {
  display: flex;
  align-items: center;
  padding: 0.5em 0;
}

.task label {
  margin: 0 1em;
}
</style>