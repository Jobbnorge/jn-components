<template>
  <ul>
    <li v-for="advertisement in advertisements" v-bind:key="advertisement.id">
      <div class="advertisement-grid">
        <fa-icon :icon="['fal', 'file-alt']"></fa-icon>
        <div class="ad-info">
          <div class="ad-status">{{advertisement.status}}</div>
          <div class="ad-name">{{advertisement.name}}</div>
        </div>
        <a @click="navigate(advertisement.url)">
          <fa-icon :icon="['fal', 'external-link' ]" />
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "JnAdvertisementList",
  props: {
    advertisements: Array,
    navigate: { type: Function }
  }
};
</script>

<style scoped>
.advertisement-grid {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  border-bottom: 1px solid black;
  padding: 0.5em;
  height: 100%;
}
.advertisement-grid > * {
  align-self: center;
}
ul {
  list-style: none;
  padding: 0;
}
ul li a {
  cursor: pointer; 
}

.ad {
  display: flex;
  align-items: center;
  padding: 0.5em 0;
}
.ad-status{
  font-size:0.7rem;
  color:#127dac;
}
</style>