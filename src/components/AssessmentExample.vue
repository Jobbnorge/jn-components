<template>
    <div>
        <Rating :size="20" /> 
        
        <div class="container">
            <JnPickDateTime :action="tellTime" colorTheme="green" />
        </div>
    </div>
    
</template>
<script>
    import Rating from './../ui_components/assessment/Rating';
    import JnPickDateTime from './../ui_components/datetime/JnPickDateTime';

    export default {
        name: "AsessmentExample",
        components: {
            Rating,
            JnPickDateTime
        },
        methods: {
            tellTime(time) {
                console.log(time); 
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