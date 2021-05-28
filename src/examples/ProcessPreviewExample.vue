<template>
    <div class="pp-wrapper">
        <ProcessPreview v-for="step in steps" :key="step.id" colorTheme="blue" :showArrow="steps.length-1 > steps.indexOf(step)" :faClass="mapActionToIcon(step.action)">
            <template #content>
                {{step.name[systemLanguageId-1].text}}
            </template>
        </ProcessPreview>
    </div>
</template>

<script>
import ProcessPreview from "../ui_components/charts/ProcessPreview"; 
import * as data from "./../mock_data/single-applicationStatusSet.json";

export default {
    components: {
        ProcessPreview,
    },
    data() {
        return {
            systemLanguageId: 1,
            steps: data.applicationStatus,
        }
    },
    methods: {
        mapActionToIcon(action) { 
          if(action !=null) {
            switch(action) {
                case "Interview":
                    return "fa-user-friends";
                case "Hire":
                    return "fa-handshake-alt";
                case "Qualified":
                    return "fa-thumbs-up";
                case "NotQualified":
                    return "fa-thumbs-down"; 
                case "Nominate":
                    return "fa-list-ol"; 
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