<template>
    <div>
        <Rating :size="20" /> 
        
        <div class="container">
            <JnPickDateTime :action="tellTime" colorTheme="" />
        </div>
        <JnCounter :startAt="20" :max="20" :min="1" message="Du har nådd enden på lista"/>
    </div>
    
</template>
<script>
    import Rating from './../ui_components/assessment/Rating';
    import JnPickDateTime from './../ui_components/datetime/JnPickDateTime';
    import JnCounter from './../ui_components/assessment/JnCounter';

    export default {
        name: "AsessmentExample",
        components: {
            Rating,
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