<template>
  <div class="card jn-card">
    <div class="wrapper card-body">
      <h2 v-if="(title.length > 2)" class="jn-card-title">{{ title }}</h2>
      <p v-if="(subtitle)" class="jn-card-subtitle">{{ subtitle }}</p>
      <div>
        <slot name="content">
          <img v-if="contentPlaceholder" :src="contentPlaceholder.imgPath" class="card-img mt-2 mb-2" :alt="contentPlaceholder.imgAlt" />
        </slot>
      </div>
      <slot name="description">
      </slot>
      <div class="wrapper">
        <slot name="button">
        </slot>
      </div>
    </div>
  </div>
</template>

<script>

import ContentPlaceholder from './../models/ContentPlaceholder'

export default {
  name: "JnCard",
  props: {
    title: String,
    subtitle: String,
    contentPlaceholder: ContentPlaceholder
  }
};
</script>

<style scoped>
.wrapper {
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
.jn-card-title {
  font-size: 1.125rem;
  text-transform: uppercase;
}
.jn-card-subtitle {
  font-size: 1.125rem;
}
.card-body {
  grid-template-columns: 1fr;
}
div > svg {
  margin: 0 auto; 
}
</style>