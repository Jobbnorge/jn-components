<template>
    <div class="jn-card-mini-wrapper">
        <slot name="chart" />
        <div class="jn-card-mini-content jn-card-mini-figure">{{figure}}</div>
        <div class="jn-card-mini-content jn-card-mini-info">{{info}}</div>
    </div>
</template>

<script>
export default {
    name: 'JnCardMini',
    props: {
        figure: Number,
        info: String
    }
}
</script>

<style scoped>
.jn-card-mini-wrapper {
    background-color: #E8F5FA;
}
.jn-card-mini-content{
    text-align: center;
}
.jn-card-mini-figure{
    font-size: 5em;
}
.jn-card-mini-info {
    padding-bottom: 12px;
}
</style>