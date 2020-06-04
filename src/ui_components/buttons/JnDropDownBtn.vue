<template>
    <div class="dropdown">
        <button class="btn-drop dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
             <fa-icon v-if="icon" :icon="['fal', icon]"/>
            {{text}}
        </button>
        <div class="dropdown-menu">
            <ul v-if="type === 'event'">
                <li class="dropdown-item" 
                    v-for="(option,x) in options" 
                    :key="x"
                    @click="handleClick(option)"
                >
                    {{option.text}}
                </li>
            </ul>
            <a v-else class="dropdown-item" v-for="(option,x) in options" :key="x" :href="option.url">{{option.text}}</a>
        </div>
    </div>
</template>

<script>    
    export default {
        name: "JnDropDownBtn",
        props: {
            text: String,
            icon: String,
            type: String,
            options: Array
        },
        methods: {
            handleClick(option) {
                this.$emit('itemClicked', option)
            }
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
    ul {
        list-style: none; 
        padding: 0;
    }
</style>