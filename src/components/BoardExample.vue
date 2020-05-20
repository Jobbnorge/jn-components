<template>
  <div class="wrapper">
    <JnBoard :boards="boards" />    
  </div>  
</template>

<script>

import JnBoard from "./../ui_components/board/JnBoard";

export default {
  name: "demoList",
  components: {
    JnBoard
  },
  data: function () {
    return {
      boards: [
        {
          name: "Til vurdering",
          items: [
            {
              firstName: "Per-Oskar",
              lastName: "Helgesen",
              title: "Rådgiver",
              points: 967,
              age: 32,
            },
            {
              firstName: "Gunnvor H.",
              lastName: "Mohaug",
              title: "Arbeidsledig",
              points: 1003,
              age: 31,
            },
          ],
        },
        {
          name: "Intervju",
          items: [
            {
              firstName: "Nils Carl Fredrik Berg",
              lastName: "Johansson",
              title: "Selger",
              points: 990,
              age: 27,
            },
            {
              firstName: "June Larsen",
              lastName: "Granlund",
              title: "Butikkmedarbeider",
              points: 850,
              age: 28,
            },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
</style>
