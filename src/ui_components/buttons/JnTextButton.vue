<template>
    <a class="button" role="button" :href="url" :id="id" @click="$emit('txtBtnClicked')">
        <slot></slot>
        <fa-icon v-if="icon" :icon="['fal', icon]" />
        <fa-icon v-else :icon="['fal', 'chevron-right']" />
    </a>
</template>

<script>
export default {
    name: "JnTextButton", 
    props: {
        url: String,
        id: String,
        icon: String
    }   
}
</script>

<style scoped>
    a.button {
        background: none; 
        border: none;
        padding: 0.625rem 0.5rem;  
        text-transform: uppercase; 
        text-decoration: none;
        color: #44303c;
        cursor: pointer; 
    }
    svg {
        margin-left: 0.5rem; 
    }
    a.button:link a.button:visited a.button:hover a.button:active {
        color: #44303c;
    }
    a.button:hover {
        outline: none;
        background-color: rgba(68, 48, 60, 0.2);
        border-radius: 3px;
    }
    
</style>