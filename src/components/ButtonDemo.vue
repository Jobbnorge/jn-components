<template>
    <div>
        <JnTextButton url="http://nrk.no" id="someIdToDoStuff">My text</JnTextButton>
        <div class="button-row">
            <JnToggleButton icon="sort-numeric-up" :action="handleOnClick" placement="left" secondIcon="sort-numeric-down-alt">Toggle Text</JnToggleButton>
            <JnToggleButton icon="user-plus" :action="handleOnClick" placement="right">Toggle Text</JnToggleButton>
        </div>

    </div>

</template>

<script>
    import JnTextButton from "./../ui_components/buttons/JnTextButton" 
    import JnToggleButton from "./../ui_components/buttons/JnToggleButton"

export default {
    name: "ButtonDemo",
    components: {
        JnTextButton,
        JnToggleButton
    },
    methods: {
        handleOnClick() {
            //alert("Pass a function to trigger onClick behaviour");
        }
    }
}
</script>
<style scoped>
    .button-row {
        display: flex; 
    }
    .button-row > div {
        margin: 1rem 1rem 1rem 0rem;
    }
</style>
