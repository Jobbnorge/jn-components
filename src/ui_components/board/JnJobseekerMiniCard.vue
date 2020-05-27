<template>
  <div class="grid-wrapper">
    <Avatar class="avatar" :firstName="firstName" :lastName="lastName" :id="id"/>
    <div class="info">
        <p class="name">{{ firstName }} {{lastName}}</p>
        <p class="title">{{ title }}, {{ age }}</p>
    </div>  
    <div class="details">
        <div class="points"> <i class="icon"><fa-icon :icon="['fas', 'bullseye']" size="sm"/></i> {{points}} poeng </div>
        <div class="label">{{ label }}</div>
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
    label: String
  }
};
</script>

<style scoped>


.grid-wrapper {
  background-color: #fff;
  margin: .5rem;  
  border-radius: 3px;
  padding: .5rem;
  display: grid;
  grid-template-columns: auto 2fr 1fr;
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

.info {
  align-self: center;
}

.avatar {
  margin: 0 .75rem;
  align-self: center;
}

.details {
  display: grid;
}

.points {
  text-align: right;
  font-size: .725rem;
  color: #1D764F;
}  

.label {
  background: #FFEEF6;
  color: #D41472;
  border-radius: 16px;
  width: auto;
  padding: 0 .5em;
  justify-self: end;
}

</style>
