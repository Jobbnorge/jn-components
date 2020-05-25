<template>
    <div class="counter">
        <button class="btn pad darken-hover animate" type="button" @click="increment">
            <fa-icon :icon="['fal', 'chevron-up']" size="4x" />
        </button>
        <button class="text-xxl btn pad darken-hover animate" type="button" @click="openModal">{{showNumber}}</button>
        <button class="btn pad darken-hover animate" type="button" @click="decrement">
            <fa-icon :icon="['fal', 'chevron-down']" size="4x" />
        </button>
        <p v-if="this.counter == this.max || this.counter == this.min">{{message}}</p>
    </div>
</template>

<script>

    export default {
        name: "JnCounter",
        props: {
            startAt: Number,
            max: Number,
            min: Number,
            step: Number, 
            message: String
        },
        data() {
            return {
                counter: 0,
                showNumber: "-",
                incrementBy: 1 
            }
        },
        created() {
            this.counter = this.startAt; 
            
            if(this.step) {
                this.incrementBy = this.step 
            }
        },
        methods: {
            increment() {
                console.log(this.startAt); 
                if(this.counter < this.max) {
                    this.counter += this.incrementBy; 
                }
         
                this.showNumber = this.counter 

            },
            decrement() {  
                if(this.counter > this.min) {
                    this.counter -= this.incrementBy; 
                }
                this.showNumber = this.counter
            },
            openModal() {
                console.log("modal open")
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