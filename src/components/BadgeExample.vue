<template>
    <div>
        <JnBadge colorClass="pink">Ny</JnBadge>
        <JnBadge colorClass="blue">Hot new feature!</JnBadge>
    </div>
</template>
<script>
import JnBadge from "../ui_components/misc/JnBadge"
export default {
    name: "BadgeExample",
    components: {
        JnBadge
    }
}
</script>