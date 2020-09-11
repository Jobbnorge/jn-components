<template>
  <article class="info-wrapper" v-if="showInfoCard">
    <div>
      <fa-icon :icon="['fal', icon]" color="#127dac" size="2x" />
      <header>
        <h1 class="info-header">{{title}}</h1>
        <a class="end muted" href="#" role="button" v-if="removable" @click="hideInfoCard">
          <fa-icon :icon="['fas', 'times']" />
        </a>
      </header>
      <section>
        <p>{{body}}</p>
        <a v-if="hyperlink" :href="hyperlink.url">{{hyperlink.friendlyName}}</a>
      </section>
    </div>
  </article>
</template>
<script>
import Hyperlink from "../../domain/Hyperlink";
export default {
  name: "JnInfoCard",
  props: {
    title: String,
    body: String,
    /** Vises som linkknapp nederst i info kortet
     * @values Hyperlink {friendlyName: String, url:String}
     */
    hyperlink: {
      type: Hyperlink,
    },
    icon: {
      type: String,
      default: "info-circle",
    },
    removable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showInfoCard: true,
    };
  },
  methods: {
    hideInfoCard(evt) {
      this.showInfoCard = false;
      this.$emit("infoCardHidden", evt);
    },
  },
};
</script>
<style scoped>
.info-wrapper {
  display: grid;
  color: #44303c;
  background: #f6f5f6;
  border: 1px solid #f1f1f1;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.12);
  padding: 0.8rem;
}
.info-wrapper > div {
  display: grid;
  grid-template-columns: 50px auto;
  gap:0.3em;
}
.info-header {
  font-size: 1.125rem;
}
section {
  grid-column: 2;
}
.muted {
  color: #72616c;
}
.end {
  justify-self: end;
}
header {
  display: grid;
  grid-template-columns: 9fr 1fr;
}
</style>