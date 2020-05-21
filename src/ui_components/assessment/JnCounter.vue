<template>
    <div class="counter">
        <button class="btn pad darken-hover animate" type="button" @click="increment">
            <fa-icon :icon="['fal', 'chevron-up']" size="4x" />
        </button>
        <button class="text-xxl btn pad darken-hover animate" type="button" @click="openModal">{{showNumber}}</button>
        <button class="btn pad darken-hover animate" type="button" @click="decrement" >
            <fa-icon :icon="['fal', 'chevron-down']" size="4x" />
        </button>
        <p v-if="this.counter == this.max || this.counter == this.min">{{message}}</p> 
    </div>
</template>
<script>
    export default {
        props: {
            startAt: Number,
            max: Number,
            min: Number,
            message: String
        },
        data() {
            return {
                counter: 0,
                showNumber: "-"
            }
        },
        created() {
            this.counter = this.startAt; 
        },
        methods: {
            increment() {
                if(this.counter < this.max) {
                    this.counter += 1; 
                }
        
                this.showNumber = this.counter 

            },
            decrement() {  
                if(this.counter > this.min) {
                    this.counter -=1; 
                }
                this.showNumber = this.counter
            },
            openModal() {
                alert("Her kommer det noe gøy senere")
            }

        }
    }
</script>
<style scoped>
    .counter {
        display: grid; 
        justify-items: center;
    }
    .text-xxl {
        font-size: 3rem; 
    }
    .pad {
        padding: 0.5rem 0.65rem; 
    }
    .darken-hover:hover {
        background: rgba(0, 0, 0, 0.1);
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