<template>
    <div class="pp-wrapper">
        <ProcessPreview v-for="step in steps" :key="step.id" colorTheme="blue" :showArrow="steps.length-1 > steps.indexOf(step)" :icon="mapActionToIcon(step.action)">
            <template #content>
                {{step.name[systemLanguageId-1].text}}
            </template>
        </ProcessPreview>
    </div>
</template>

<script>
import ProcessPreview from "../ui_components/charts/ProcessPreview"; 
import * as data from "./../mock_data/single-applicationStatusSet.json";
import { faThumbsUp, faThumbsDown, faCommentsAlt, faMedal, faHandshakeAlt} from "@fortawesome/pro-light-svg-icons";

export default {
    components: {
        ProcessPreview,
    },
    data() {
        return {
            systemLanguageId: 1,
            steps: data.applicationStatus,
            faThumbsUp,
            faThumbsDown,
            faCommentsAlt,
            faMedal,
            faHandshakeAlt
        }
    },
    methods: {
        mapActionToIcon(action) { 
          if(action !=null) {
            switch(action) {
                case "Interview":
                    return faCommentsAlt;
                case "Hire":
                    return faHandshakeAlt;
                case "Qualified":
                    return faThumbsUp;
                case "NotQualified":
                    return faThumbsDown; 
                case "Nominate":
                    return faMedal; 
            }
          }
      }
    }
    
    
}
</script>
<style scoped>
.pp-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem; 
    align-items: center; 
}
.step-icon {
    width: 1rem;
    height: 1rem;
    display: inline-flex;  
    margin-right: 0.5rem; 
}
</style>