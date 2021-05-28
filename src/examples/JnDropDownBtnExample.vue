<template>
<div>
    <JnDropDownBtn
    text="Velg et element"
    isPrimary
    :options="[{ id: '1', text: 'Item1' }, { id: '2', text: 'hello 2' }]"
    @itemClicked="itemClicked"
  />
    <JnDropDownBtn
    text="Velg"
    isPrimary
    dropUp
    :options="[{ id: '5', text: 'ANOTHER' }, { id: '3', text: 'hello 2' }]"
    @itemClicked="itemClicked"
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
    }
  },
  methods: {
    itemClicked(event) {
      this.item = event;
    },
  },
};
</script>
