<template>
    <div class="badge" :class="colorClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "JnBadge",
    props: {
        colorClass: String 
    }
}
</script>
<style scoped>
    .badge {
        
        display: inline-block;
        min-width: 1em; /* em unit */
        padding: 1em; /* em unit */
        border-radius: 1.5em; 
    }
    .pink {
        background: #FFEEF6;
        color: #D41472;
    }

    .grey {
        background: #F6F5F6;
        color: #44303C;
    }

    .blue {
        background: #E8F5FA;
        color: #127DAC;
    }

    .green {
        background: #D3F5DF;
        color: #1D764F;
    }
</style>