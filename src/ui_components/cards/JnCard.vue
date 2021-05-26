<template>
  <div v-bind:class="{ flat: flat }" class="jn-card">
    <div class="jn-card-header">
      <h2 v-if="(title.length > 2)" class="jn-card-title">{{ title }}</h2>
      <p v-if="(subtitle)" class="jn-card-subtitle">{{ subtitle }}</p>
    </div>
    <div class="wrapper jn-card-body">
      <slot name="content">
      </slot>
      <slot name="description"></slot>
    </div>
    <div class="jn-cardfooter wrapper">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "JnCard",
  props: {
    title: String,
    subtitle: String,
    flat: Boolean,
  },
};
</script>

<style scoped>
.wrapper{
  display: grid;
}
.wrapper > a {
  justify-self: end;
  align-self: end;
}
.jn-card {
  background: #fdfdfd;
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.12);
}
.flat {
  box-shadow: none;
}
.jn-card-title {
  font-size: 1.125rem;
  text-transform: uppercase;
}
.jn-card-subtitle {
  font-size: 1.125rem;
}
.jn-card {
  grid-template-columns: 1fr;
  padding: 1.25rem;
  height: 100%;
  display:grid;
}
.jn-cardfooter {
  align-items: end; 
  justify-items: end;
  margin-top: 0.5rem; 
}
div > svg {
  margin: 0 auto;
}
</style>