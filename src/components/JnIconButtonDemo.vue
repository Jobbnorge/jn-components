<template>
    <div>
        <p>4x size and hasAnimation: </p>
        <JnIconButton icon="download" size="4x" hasAnimation />
        <p>Default JnIconButton: </p>
        <JnIconButton icon="chevron-right" />
    </div>
    

</template>
<script>
import JnIconButton from "./../ui_components/buttons/JnIconButton"
export default {
    name:"JnIconButtonDemo",
    components: {
        JnIconButton
    }
}
</script>