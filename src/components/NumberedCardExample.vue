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
            <FontAwesomeIcon :icon="faTimesCircle" />
            Slett
          </JnMiniButton>
        </div>
      </div>
    </NumberedCard>
  </transition>
</template>

<script>
import NumberedCard from "../ui_components/cards/NumberedCard";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons";

export default {
  components: {
    NumberedCard,
    FontAwesomeIcon,
  },
  data() {
    return {
      faTimesCircle,
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>