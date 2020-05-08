<template>
<div class="wrapper">
  <JnCard
      title="Oppgaver"
    >
    <template #content>
        <JnTaskList :tasks="tasks" :toggle="toggle" />
    </template>
  </JnCard>
</div>
</template>

<script>
import JnTaskList from "./../ui_components/JnTaskList";
import JnCard from "./../ui_components/JnCard";

export default {
  name: "TaskListDemo",
  components: {
    JnTaskList,
    JnCard
  },
  methods: {
      toggle() {
          alert("toggle")
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

<style scoped>
 .wrapper {
     grid-template-columns: 1fr;
 }
</style>