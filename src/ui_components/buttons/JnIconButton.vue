<template>
   <button type="button" class="btn icon-button" v-bind:class="{animate: hasAnimation}" @click="$emit('itemClicked')">
       <fa-icon :icon="['fal', icon]" :size="size"/>
   </button> 
</template>
<script>
export default {
    name: "JnIconButton",
    props: {
        icon: String,
        size: String,
        hasAnimation: Boolean 
    }
}
</script>
<style scoped>
    .icon-icon-button {
        background: none; 
        border: none;
        padding: 0.625rem 0.5rem;  
        text-transform: uppercase; 
        text-decoration: none;
        color: #44303c;
    }
    .icon-button:link .icon-button:visited .icon-button:hover .icon-button:active {
        color: #44303c;
    }
    .icon-button:hover {
        outline: none;
        background-color: rgba(68, 48, 60, 0.2);
        border-radius: 3px;
    }
    .animate{
        transition: all .2s ease-in;
    }
    .animate:hover{
        transform: scale(1.03);
    }
    .animate:active {
        transform: scale(0.9);
    }

</style>