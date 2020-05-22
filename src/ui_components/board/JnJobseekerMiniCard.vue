<template>
  <div class="grid-wrapper">
    <Avatar :firstName="firstName" :lastName="lastName" color="pink" :id="id"/>
    <div>
        <p class="name">{{ firstName }} {{lastName}}</p>
        <p class="title">{{ title }}, {{ age }}</p>
    </div>  
    <div>
        <div class="points"> <i class="icon"><fa-icon :icon="['fas', 'bullseye']" size="sm"/></i> {{points}} poeng </div>   
    </div>
  </div>
  
</template>

<script>

import Avatar from "../misc/Avatar";

export default {
  name: "JnJobseekerMiniCard",
  components: {
    Avatar
  },
  props: {
    firstName: String,
    lastName: String,
    title: String,
    points: Number,
    id: Number,
    age: Number,
    idx: Number
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
  grid-template-columns: 1fr 2fr 1fr;
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
