<template functional>
    <div>
        <ul v-for="(item, x) in props.listItems" :key="x">
            <li>
                <fa-icon :icon="['fal', item[1]]" />
                {{item[0]}}
            </li> 
        </ul>
    </div>
</template>

<script>
export default {
    name: "JnIconList",
    functional: true, 
    props: {
        listItems: Object 
    }
}
</script>
<style scoped>
    ul {
        list-style: none;
        padding: 0;
    }
</style>