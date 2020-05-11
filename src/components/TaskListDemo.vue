<template>
  <JnTaskList :tasks="tasks" :toggle="toggle" />
</template>

<script>
import JnTaskList from "./../ui_components/lists/JnTaskList";

export default {
  name: "TaskListDemo",
  components: {
    JnTaskList
  },
  methods: {
      toggle() {
          alert("Halloi")
      }
  },

  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Eksempeloppgave 1 med litt lengere tekst(...)",
          completed: true
        },
        {
          id: 2,
          name: "Eksempeloppgave 2",
          completed: false
        },
        {
          id: 3,
          name: "Eksempeloppgave 3",
          completed: true
        },
        {
          id: 4,
          name: "Eksempeloppgave 4",
          completed: false
        },
        {
          id: 5,
          name: "Eksempeloppgave 5",
          completed: true
        }
      ]
    };
  }
};
</script>
