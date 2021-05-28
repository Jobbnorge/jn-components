<template>
  <div class="container">
    <JnDropDownBtn
      text="Velg et element"
      isPrimary
      :options="[
        { id: '1', text: 'Item1' },
        { id: '2', text: 'hello 2' },
      ]"
      @itemClicked="itemClicked"
      id="mydrop"
    />
    <JnDropDownBtn
      text="Velg et annet element"
      dropUp
      isPrimary
      :options="[
        { id: '1', text: 'Item1' },
        { id: '2', text: 'hello 2' },
      ]"
      @itemClicked="itemClicked"
      id="myotherdrop"
    />
  </div>
</template>
<script>
import JnDropDownBtn from "./../ui_components/buttons/JnDropDownBtn";
export default {
  components: {
    JnDropDownBtn,
  },
  data() {
    return {
      item: {},
    };
  },
  methods: {
    itemClicked(event) {
      this.item = event;
    },
  },
};
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
