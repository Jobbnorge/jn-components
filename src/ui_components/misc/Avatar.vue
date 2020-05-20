<template>
    <div class="initials">{{initials}}</div>
</template>

<script>
export default {
    name: "Avatar",
    props: {
        firstName: String,
        lastName: String
    },
    computed: {
        initials : (vm) => `${vm.firstName.charAt(0)}${vm.lastName.charAt(0)}`
    }
}
</script>

<style>
    .initials {
        height: 3em;
        width: 3em;
        line-height: 3em;
        margin: auto;  
        border-radius: 50%;  
        background: #FFEEF6;
        color: #D41472;
        text-align: center;
    }
</style>