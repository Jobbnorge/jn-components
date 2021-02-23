<template>
<div>
    <InfoBox canClose colorTheme="blue">
        <template #box-content>
            <div>
                <h1 class="title">En boks</h1>
                <p>Den har et slot som vi har putta noe greier i</p>
            </div>
        </template>
    </InfoBox>
    <InfoBox colorTheme="pink" canClose></InfoBox>
    <InfoBox colorTheme="gray"></InfoBox>
    <InfoBox colorTheme="green"></InfoBox>
    <InfoBox>
    </InfoBox>
</div>
</template>

<script>
import InfoBox from "../ui_components/misc/InfoBox"
export default {
    name: "InfoBoxExample",
    components: {
        InfoBox
    }
}
</script>

<style scoped>
div {
    margin-bottom: 1rem; 
}
.title {
    font-size: 2rem; 
}
</style>