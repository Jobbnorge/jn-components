<template>
    <a class="button shrink" role="button" :href="url" :id="id">
        <slot></slot>
        <fa-icon :icon="['fal', 'chevron-right']" />
    </a>
</template>

<script>
export default {
    name: "TextButton", 
    props: {
        url: String,
        id: String
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