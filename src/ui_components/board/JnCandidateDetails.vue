<template>
    <h1>{{name}}</h1>
</template>
<script>
export default {
    name: "JnCandidateDetails",
    props: {
        candidate: Object
    },
    computed: {
        name: (vm) => `${vm.candidate.firstName} ${vm.candidate.lastName}`
    }
}
</script>