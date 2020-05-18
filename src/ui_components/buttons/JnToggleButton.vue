<template>
    <div role="button" @click="filter" :class="{active: isActive}">
        <fa-icon :icon="['fal', activeIcon]" v-if="placement ==='left'"></fa-icon>
        <slot></slot>
        <fa-icon :icon="['fal', icon]" v-if="placement === 'right'"></fa-icon>
    </div>    
</template>

<script>
export default {
    name: "JnToggleButton",
    props: {
        icon: String,
        secondIcon: String, 
        placement: String,
        action: Function
    },
    data() {
        return {
            isActive: false,
            activeIcon: this.icon 
        }
    },
    methods: {
        filter() {
            this.isActive = !this.isActive

            if(this.isActive) {
                this.activeIcon = this.secondIcon
                //Action 1
            }
            else {
                this.activeIcon = this.icon
            }
        }
    }
}
</script>

<style scoped>
    .active {
        color: #D41472;
        font-weight: 600;
    }
    svg {
        margin: 0rem 0.5rem 0rem 0.5rem; 
    }
</style>