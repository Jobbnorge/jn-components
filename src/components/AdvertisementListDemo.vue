<template>
  <div style="width:50%">
    <JnAdvertisementList :advertisements="advertisements" :navigate="navigate" />
  </div>
</template>

<script>
import JnAdvertisementList from "./../ui_components/lists/JnAdvertisementList";

export default {
  name: "TaskListDemo",
  components: {
    JnAdvertisementList
  },
  methods: {
    navigate(url) {
      alert(url);
    }
  },

  data() {
    return {
      advertisements: [
        {
          id: 1,
          name: "Jobbnorge.no",
          url: "https://www.vg.no",
          status: "Utgått - 20 dager siden"
        },
        {
          id: 2,
          name: "Finn.no",
          url: "https://www.vg.no",
          status: "Pågår - 5 dager igjen"
        },
        {
          id: 3,
          name: "Nav.no",
          url: "https://www.vg.no",
          status: "Pågår - 2 dager igjen"
        },
        {
          id: 4,
          name: "Jobbnorge.no(2)",
          url: "https://www.vg.no",
          status: "Utgått - 6 dager siden"
        },
        {
          id: 5,
          name: "Jobbnorge.no(3)",
          url: "https://www.vg.no",
          status: "Publisert - 10 dager igjen"
        }
      ]
    };
  }
};
</script>