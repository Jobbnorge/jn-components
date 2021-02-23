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
    <InfoBox colorTheme="pink" canClose>
        <template #box-content>
            <JnTextArea :max=400 labelText="Hjelpetekst (som vises i Jobbadmin)" style="margin-top: 1rem;" />
        </template>
    </InfoBox>
    <InfoBox colorTheme="gray"></InfoBox>
    <InfoBox colorTheme="green"></InfoBox>
    <InfoBox>
    </InfoBox>
</div>
</template>

<script>
import InfoBox from "../ui_components/misc/InfoBox"
import JnTextArea from "../ui_components/input/JnTextArea"
export default {
    name: "InfoBoxExample",
    components: {
        InfoBox,
        JnTextArea
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