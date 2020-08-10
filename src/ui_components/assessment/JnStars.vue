<template>
    <div class="stars">
        <star-rating
            :star-size="size" 
            :rating="showAmount"
            :max-rating="max"
            :show-rating="!hasValueHigherThanAmount"
            :read-only="readOnly"
            active-color = "#D41472"
            @rating-selected="emitUpward"
        />
        <span v-if="hasValueHigherThanAmount">{{value}}</span>
    </div>
</template>
<script>
    import StarRating from 'vue-star-rating'
export default {
    name: "JnStars",
    components: {
        StarRating
    },
    props: {
        /** Hvor mange fylte stjerner som skal vises */
        showAmount: {
            type: Number,
            default: 0 
        },
        /** Max antall stjerner */
        max: {
            type: Number,
            default: 5
        }, 
        /** Nyttig som egen prop dersom antall stjerner og verdi skal være ulikt (nederste eksempel) */
        value: {
            type: Number,
            default: 0 
        },
        /** Bruk denne dersom bruker ikke skal kunne endre antall stjerner */
        readOnly: {
            type: Boolean,
            default: false 
        },
        /** SVG-størrelse. Eksempelet viser 50 vs. 25 */
        size: Number 
    },
    computed: {
        hasValueHigherThanAmount: vm => {
            if(vm.value > vm.showAmount) {
                return true; 
            }
            else {
                return false; 
            }
        }
    },
    methods: {
        emitUpward(e) {
            /** Antall stjerner som er valgt 'videre-emittes' ett hakk opp */
           this.$emit("rating-selected", e)
           
        }
    }
}
</script>
<style scoped>
    .stars {
        display: flex;
        align-items: center; 
    }
    .stars > span {
        margin-left: .5rem; 
    }
</style>