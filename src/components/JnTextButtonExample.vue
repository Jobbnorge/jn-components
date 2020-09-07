<template>
<div>
    <JnTextButton icon="download" id="1" default="tekst" >
    <template #default>
        Trykk på meg
    </template>
    </JnTextButton>
</div>
</template>

<script>
import JnTextButton from "./../ui_components/buttons/JnTextButton"

export default {
    name: "JnTextButtonExample"
}
</script>