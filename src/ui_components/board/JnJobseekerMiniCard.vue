<template>
  <div class="grid-wrapper">
    <div>
        <p class="secondary-text">{{ name }}</p>
        <p class="title">{{ title }}, {{ age }}</p>
    </div>  
    <div style="vertical-align:top">
        <div class="points"> <i class="icon"><fa-icon :icon="['fas', 'bullseye']" size="md"/></i> {{points}} poeng </div>    
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
  vertical-align: top;
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
}
.secondary-text {
  color: #127dac;
  font-size: 0.75rem;
  margin: 0.5rem 0 0.25rem 0;
}
.extended {
  border-bottom: 1px solid rgba(68, 48, 60, 0.3);
}
.grow {
  transition: all 0.2s ease-in;
}
.grow:hover {
  transform: scale(1.03);
}
a:link {
  color: #44303c;
  text-decoration: none;
}
a:visited {
  color: #44303c;
}
a:hover {
  color: #44303c;
}
a:active {
  color: #44303c;
}
.center {
  justify-self: center;
}
</style>
