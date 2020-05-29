<template>
    <div class="button-wrapper pt20">
        <h3>Buttons</h3>
        <JnTextButton url="http://nrk.no" id="someIdToDoStuff">My text</JnTextButton>
        <div class="button-row">
            <JnToggleButton icon="sort-numeric-up" placement="left" secondIcon="sort-numeric-down-alt">Toggle Text</JnToggleButton>
            <JnToggleButton icon="user-plus" placement="right">Toggle Text</JnToggleButton>
        </div>
        <h3>Dropdown meny</h3>
        <DashboardTopMenu />
        <JnDropDownBtn text="No anchor-tag" type="event" :options='[{text: "hello"}, {text: "hello 2"}]' @itemClicked="itemClicked" />
        <JnDropDownBtn text="With anchor tag" :options='[{text: "NRK", url: "http://www.nrk.no"}, {text: "VG", url: "http://www.vg.no"}]' />
    </div>

</template>

<script>
    import JnTextButton from "./../ui_components/buttons/JnTextButton" 
    import JnToggleButton from "./../ui_components/buttons/JnToggleButton"
    import DashboardTopMenu from "./../components/DashboardTopMenu"
    import JnDropDownBtn from './../ui_components/buttons/JnDropDownBtn'

export default {
    name: "ButtonDemo",
    components: {
        JnTextButton,
        JnToggleButton,
        DashboardTopMenu,
        JnDropDownBtn
    },
    data() {
        return {
            item: {}
        }
    },
    methods: {
        itemClicked(event) {
            this.item = event; 
        }
    }
}
</script>
<style scoped>
    .button-wrapper > * {
        margin-bottom: 1rem; 
    }
    .button-row {
        display: flex; 
    }
    .button-row > div {
        margin: 1rem 1rem 1rem 0rem;
    }
</style>
