<template>
    <div>
        <div class="container">
            <JnPickDateTime @inputChanged="inputChanged" colorTheme="green" />
        </div>
        <JnCounter :startAt="20" :max="20" :min="1" message="Du har nådd enden på lista"/>
    </div>
    
</template>
<script>
    import JnPickDateTime from './../ui_components/datetime/JnPickDateTime';
    import JnCounter from './../ui_components/assessment/JnCounter';

    export default {
        name: "AsessmentExample",
        components: {
            JnPickDateTime,
            JnCounter
        },
        data() {
            return {
                time: {}
            }
            
        },
        methods: {
            tellTime(time) {
                this.time = time; 
            },
            inputBlur(date) {
                console.info(date)
            }
        }
    
    }
</script>
<style scoped>
    .container {
        width: 50%; 
        height: 100%;
    }

</style>