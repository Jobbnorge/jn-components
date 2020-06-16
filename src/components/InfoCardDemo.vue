<template>
<div>
    <JnInfoCard 
    title="Vi oppdaterer Jobbadmin" 
    body="Oppdateringen vil foregå fra 07:00 - 08:00 den 26.6. Systemet vil derfor kunne oppleves som treigt innimellom"
    />
    <JnInfoCard 
    title="Nye funksjoner"
    icon="comments" 
    body="Nå kan du endelig gjøre masse greier du har ventet lenge på å få gjøre i Jobbadmin. Vi gleder oss, håper du også gjør det!"
    removable
    />
</div>
</template>
<script>
    import JnInfoCard from '../ui_components/cards/JnInfoCard'
export default {
    name: "InfoCardDemo",
    components: {
        JnInfoCard
    }
}
</script>
<style scoped>
    div {
        display: grid;
        gap: 1rem; 
    }
</style>