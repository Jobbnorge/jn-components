<template>
  <div id="app" class="wrapper">
    <div class="left-col">
      <nav>
        <ul>
          <router-link to="/card-container" tag="li">Card container</router-link>
          <router-link to="/horizontal" tag="li">Horizontal cards</router-link>
          <router-link to="/dropdown" tag="li">Dropdown knapp</router-link>
          <router-link to="/dialog" tag="li">Dialogboks</router-link>
          <router-link to="/locale" tag="li">Locale</router-link>
          <router-link to="/lists" tag="li">Lists</router-link>
          <router-link to="/buttons" tag="li">Buttons</router-link>
          <router-link to="/mini-card" tag="li">Mini card</router-link>
          <router-link to="/tasklist" tag="li">TaskList</router-link>
        </ul>
      </nav>

    </div>
    <div class="right-col">
      <h1 class="mb20">Jobbnorge Vue-bibliotek</h1>
      <router-view></router-view>
    </div>
    <hr />
  </div>
</template>

<script>

export default {
  name: "App"
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  
  .wrapper{
    display: grid;
    grid-template-columns: 1fr 5fr;
    font-family: 'Roboto', sans-serif;
  }
  .left-col {
    background: #E8F5FA;
    min-height: 100vh;
    padding: 1rem; 
  }
  .right-col {
    margin: 1rem; 
  }
  nav ul li {
    color: #44303c; 
    font-size: 1.25rem;
    list-style: none;
    cursor: pointer;
    margin-bottom: 1rem; 
    padding-bottom: 0.25rem;
    box-sizing: border-box;
    transition: font-weight 150ms ease-in;

  }
  nav ul li:hover {
    font-weight: bold;
  }
  .router-link-active {
    font-weight: bold;

  }
  .router-link-active::after {
    content: ""; 
    display: block;
    width: 20%; 
    margin-top: 0.25rem; 
    border-bottom: 5px solid #7FFFC7;
  }
</style>