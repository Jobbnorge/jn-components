<template>
    <div class="wrapper">
        <JnDropDownBtn text="Ny Søker" 
        :options="dropdownOptions" 
        icon="user-plus"
        />
        <JnDropDownBtn text="Last Ned" 
        :options="dropdownOptions"
        />
    </div>
</template>

<script>
import JnDropDownBtn from "./../ui_components/buttons/JnDropDownBtn"
import { dropdownOptions } from "./../mock_data/dropdown-options.js"

export default {
    name: "DashboardTopMenu",
    components: {
        JnDropDownBtn
    },
    data() {
        return {
              dropdownOptions
        }
    }
}
</script>

<style scoped>
    /* DEMO ONLY!
    Remove this class before actual use :D  */
    .wrapper {
        width: 200px;
        display: grid; 
        grid-template-columns: 1fr 1fr; 
    }
</style>