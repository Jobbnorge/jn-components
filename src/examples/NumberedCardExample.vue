<template>
  <transition name="fade">
    <NumberedCard v-if="show" :number="1" colorTheme="blue">
      <div class="wrap">
        <div>
          <label>Tittel (som vises i Jobadmin):</label>
          <input type="text" placeholder="Skriv noe" size="40" />
        </div>
        <div class="right">
          <JnMiniButton
            showBackground
            hasAnimation
            @mini-button-clicked="handleDelete()"
          >
            <span :class="['fas', 'fa-times-circle']" style="margin-right: 8px"></span>
            Slett
          </JnMiniButton>
        </div>
      </div>
    </NumberedCard>
  </transition>
</template>

<script>
import NumberedCard from "../ui_components/cards/NumberedCard";
import JnMiniButton from "../ui_components/buttons/JnMiniButton";

export default {
  components: {
    NumberedCard,
    JnMiniButton,
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    handleDelete() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
.wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
.right {
  justify-self: end;
}
</style>
