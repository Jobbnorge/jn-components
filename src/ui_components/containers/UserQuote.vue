<template>
  <div>
    <div v-if="note">
      <div class="note-container">
        <div>
          <span
            class="fas fa-quote-right"
            style="color: var(--darkBlue)"
          ></span>
          <p v-if="note.length < maxLength" style="margin-left: 0.5rem;">
            {{ note }}
          </p>
          <div v-else style="display: grid; justify-items: end;">
            <transition name="fade" mode="out-in">
              <p v-if="!showAll">{{ getTrimmedText() }}</p>
              <p v-else>{{ note }}</p>
            </transition>
            <JnMiniButton
              @mini-button-clicked="showAll = !showAll"
              style="width: fit-content;"
              colorTheme="blue"
            >
              {{ showAll ? toggleShowLessText : toggleShowMoreText }}
            </JnMiniButton>
          </div>
          <small v-if="author">{{ author }}</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import JnMiniButton from "../buttons/JnMiniButton.vue";
export default {
  components: {
    JnMiniButton,
  },
  props: {
    note: String,
    author: String,
    maxLength: {
      type: Number,
      default: 200,
    },
    toggleShowMoreText: String,
    toggleShowLessText: String,
  },
  data() {
    return {
      showAll: false,
    };
  },
  methods: {
    getTrimmedText() {
      if (this.showAll == false) {
        return this.note.slice(0, this.maxLength) + "(...)";
      }
    }
  }
};
</script>
<style scoped>
.note-container {
  padding: 0.5rem;
  margin-bottom: 1rem;
  display: grid;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
