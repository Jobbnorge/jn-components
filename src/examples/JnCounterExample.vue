<template>
    <JnCounter :startAt="0" :max="15" :min="0" :step="1"/>
</template>

<script>
import JnCounter from './../ui_components/assessment/JnCounter';

export default {
    name: "JnCounterExample",
    components:{
        JnCounter
    }
}
</script>