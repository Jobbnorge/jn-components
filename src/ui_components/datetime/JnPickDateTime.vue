<template>
    <div class="datetime-container">
        <label for="date">
            <p>{{dateLabel}}</p>
            <input 
                v-bind:class="getColorTheme(this.colorTheme)" 
                type="date" 
                v-model="selectDate" 
                @blur="handleOnBlur" 
                name="date" 
            />
        </label>
        <label for="time">
            <p>{{timeLabel}}</p>
            <input 
                v-bind:class="getColorTheme(this.colorTheme)" 
                type="time" 
                v-model="selectTime"  
                @blur="handleOnBlur"
                name="time"
            />
        </label>
    </div>
</template>
<script>

    export default {
        name: "jnPickDateTime",
        props: {
            action: Function,
            colorTheme: String 
        },
        data() {
            return {
                dateLabel: "Velg dato",
                timeLabel: "Velg tid",
                selectDate: "", //yyyy-mm-dd is set by browser
                selectTime: "", //hh:mm is set by browser,
            }
        },
        methods: {
            handleOnBlur() {

                if(event.srcElement.name === "date") {
                    this.dateLabel = "Dato:"               
                }
                else {
                    this.timeLabel = "Tid:"
                }

                this.updateComponents();  
            },
            updateComponents() {

                //construct object to pass back to mother
                var dateTime = { date: this.selectDate, time: this.selectTime }
                return this.action(dateTime); 

            },
            getColorTheme(color) {

                switch (color) {
                    case "red":
                        return "red";
                    case "blue":
                         return "blue";
                    case "green":
                        return "green";
                    case "black":
                        return "black";
                }
            }
        }
    }
</script>
<style scoped>
    .datetime-container {
        display: grid;
        grid-gap: 0.5rem;
        margin: 0.5rem; 
    }
    label {
        display: grid;
        box-sizing: border-box;
    }
    input {
        border: 1px solid transparent; 
        padding: 0.5rem;
        margin-top: 0.2rem;  
    }

    .text-btn {
        border: 1px solid transparent;  
        background: none;
        padding: 0.625rem 0.5rem;
              
    }
    .red {
        color: #D41472;
        background-color: inherit;

    }
    .red:hover, .red:focus, .red:active {
        border-radius: 3px;
        border: 1px solid #D41472;
        outline: none;
    }
    .blue {
        color: #127dac;
        background-color: inherit;

    }
    .blue:hover, .blue:focus, .blue:active {
        border-radius: 3px;
        border: 1px solid #127dac; 
        outline: none;
    }
    .green {
        color: #1D764F;
        background-color: inherit;

    }
    .green:hover, .green:focus, .green:active {
        border-radius: 3px;
        border: 1px solid #1D764F; 
        outline: none;
    }
    .black {
        color: #44303C;
        background-color: inherit;

    }
    .black:hover, .black:focus, .black:active {
        border-radius: 3px;
        border: 1px solid #44303C; 
        outline: none;
    }

</style>