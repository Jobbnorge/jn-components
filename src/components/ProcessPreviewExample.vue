<template>
    <ProcessPreview
        colorTheme="blue"
        :steps="steps"
        showArrow
        flagIcon
    >
    </ProcessPreview>
</template>

<script>
import ProcessPreview from "../ui_components/charts/ProcessPreview"; 
import { recruitmentFlow } from "./../mock_data/recruitmentFlow.js"

export default {
    components: {
        ProcessPreview
    },
    data() {
        return {
            steps: recruitmentFlow
        }
    }
    
    
}
</script>