<template>
  <ul style="list-style-type: none; margin: 0; padding:0;">
    <JnExpandableListItem
      v-for="data in listData"
      :key="data.id"
      :id="data.id"
      :title="data.title"
      :secondaryText="data.secondaryText"
      colorTheme="blue"
    >
      <div>
        <h1>My content</h1>
        <p>So take a look</p>
      </div>
    </JnExpandableListItem>
  </ul>
</template>
<script>
import JnExpandableListItem from "../ui_components/lists/JnExpandableListItem.vue";
export default {
  components: {
    JnExpandableListItem,
  },
  data() {
    return {
      listData: [
        {
          id: "item1",
          title: "Title 1",
          secondaryText: "Secondary text number 1 is served here"
        },
        {
          id: "item2",
          title: "Title 2",
          secondaryText: "Secondary text number 2 is served here"
        },
        {
          id: "item3",
          title: "Title 3",
          secondaryText: "Secondary text number 3 is served here"
        }
      ]
    }
  }
};
</script>
