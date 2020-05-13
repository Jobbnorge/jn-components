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
              name: "Per-Oskar Helgesen",
              title: "Rådgiver",
              points: 967,
              age: 32,
            },
            {
              name: "Gunnvor H. Mohaug",
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
              name: "Nils Carl Fredrik Berg Johansson",
              title: "Selger",
              points: 990,
              age: 27,
            },
            {
              name: "June Larsen Granlund",
              title: "Butikkmedarbeider",
              points: 850,
              age: 27,
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
