<template>
    <div class="pp-wrapper">
        <ProcessPreview v-for="step in steps" :key="step.id" colorTheme="blue" :showArrow="steps.length-1 > steps.indexOf(step)">
            <template #content>
                <FontAwesomeIcon :icon="mapActionToIcon(step.action)" class="step-icon" />
                {{step.name[systemLanguageId-1].text}}
            </template>
        </ProcessPreview>
    </div>
</template>

<script>
import ProcessPreview from "../ui_components/charts/ProcessPreview"; 
import * as data from "./../mock_data/single-applicationStatusSet.json";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faThumbsDown, faCommentsAlt, faMedal, faHandshakeAlt} from "@fortawesome/pro-light-svg-icons";
fontAwesomeConfig.autoAddCss = false;

export default {
    components: {
        ProcessPreview,
        FontAwesomeIcon
    },
    created() {
        console.log(this.steps)
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
          console.log(action); 
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