<template>
    <div>
        <button class="btn-drop dropdown-toggle" data-toggle="dropdown">
             <fa-icon :icon="['fal', icon]"/>
            {{text}}
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" v-for="(option,x) in options" :key="x" :href="option.url">{{option.text}}</a>
        </div>
    </div>
</template>

<script>    
    export default {
        name: "JnDropDownBtn",
        props: {
            text: String,
            icon: String,
            options: Array
        }
    }
</script>

<style scoped>
    .btn-drop {
        background: none;
        border: none;
        color: #44303c;
        padding-bottom: 2px; 
        box-sizing: border-box;
    }
    .btn-drop:focus {
        outline: none;
        padding-bottom: 0px; 
        border-bottom: 2px solid rgb(127, 255, 199);
    }
</style>