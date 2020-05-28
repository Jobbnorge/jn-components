<template functional>
    <div>
        <ul v-for="(detail, x) in props.candidateDetails.details" :key="x">
            <li>
                <fa-icon :icon="['fal', detail[1]]" />
                {{detail[0]}}
            </li> 
        </ul>
    </div>
</template>

<script>
export default {
    name: "JnIconList",
    functional: true, 
    props: {
        candidateDetails: Object 
    }
}
</script>
<style scoped>
    ul {
        list-style: none;
        padding: 0;
    }
</style>