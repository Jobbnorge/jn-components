<template>
    <button class="none shrink ripple">
        <slot></slot>
        <fa-icon :icon="['fal', 'chevron-right']" />
    </button>
</template>

<script>
export default {
    name: "TextButton",    
}
</script>

<style scoped>
    button.none {
        background: none; 
        border: none;
        padding: 0.625rem 0.5rem;  
        text-transform: uppercase; 
    }
    svg {
        margin-left: 0.5rem; 
    }
    button.none:hover {
        outline: none;
        background-color: rgba(68, 48, 60, 0.2);
        border-radius: 3px;
    }
    button.none:focus {
        outline: none;
        background-color: rgba(68, 48, 60, 0.2);
        border-radius: 3px;
    }
    button.none:active {
        outline: none;
        background-color: rgba(68, 48, 60, 0.2);
        border-radius: 3px;
    }
    .shrink{
        transition: all .2s ease-in;
    }
    .shrink:focus{
        transform: scale(0.95);
    }
</style>