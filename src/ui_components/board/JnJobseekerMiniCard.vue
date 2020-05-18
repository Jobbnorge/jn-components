<template>
  <div class="grid-wrapper">
    <div>
        <p class="name">{{ name }}</p>
        <p class="title">{{ title }}, {{ age }}</p>
    </div>  
    <div>
        <div class="points"> <i class="icon"><fa-icon :icon="['fas', 'bullseye']" size="sm"/></i> {{points}} poeng </div>   
    </div>
  </div>
  
</template>

<script>
export default {
  name: "JnJobseekerMiniCard",
  props: {
    name: String,
    title: String,
    points: Number,
    age: Number
  }
};
</script>

<style scoped>

.points {
  text-align: right;
  font-size: .725rem;
  color: #1D764F;
}
  

.grid-wrapper {
  background-color: #fff;
  margin: .5em;  
  border-radius: 3px;
  padding: .5em;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: baseline;
  color: #44303c; 
}

.title {
  margin-bottom: 0.5rem;
  color: #72616C;
}
.name {
  color: #44303c;
  font-size: 0.75rem;
  font-weight: 600;
  margin: 0.5rem 0 0.25rem 0;
}
</style>
