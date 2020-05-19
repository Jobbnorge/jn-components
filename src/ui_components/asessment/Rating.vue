<template>
    <div class="rating">
        <div class="stars" @mouseleave="showCurrentRating(0)">
            <star-rating v-model="boundRating" 
                :show-rating="false"
                @current-rating="showCurrentRating" 
                @rating-selected="setCurrentSelectedRating" 
                :increment="0.5"
                :star-size="30"
                active-color = "#D41472" 
             />
             <p>{{rating}}({{avgRating}})</p>
        </div>
        <button class="btn btn-tertiary" @click="resetCurrentSelectedRating">
            <fa-icon :icon="['fal', 'eraser']" />
            Nullstill rangering
        </button>
        <p>{{currentRating}}</p>
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating';

    export default {
        name: "rating",
        components: {
            StarRating
        },
        data() {
            return {
                rating: " ",
                currentRating: "Ingen rangering",
                currentSelectedRating: "Ingen rangering",
                boundRating: 0,
                avgRating: 0
            }
        },
        methods: {
            showCurrentRating: function(rating) {
                this.currentRating = (rating === 0) ? this.currentSelectedRating : "Gi kandidaten: " + rating ;
            },
            setCurrentSelectedRating: function(rating) {
                this.rating = rating; 

                if (this.rating > 1) {
                    this.currentSelectedRating = "Din rangering: " + rating + " stjerner";
                }
                else {
                    this.currentSelectedRating = "Din rangering: " + rating + " stjerne"; 
                }
                    
            },
            resetCurrentSelectedRating: function() {
                this.currentRating = "Ingen rangering";
                this.boundRating = 0;
                this.rating = 0; 
            },
            getCurrentRating: function() {
                return this.rating; 
            }
        }
    }
</script>
<style scoped>
    .rating {
        display: grid; 
        grid-template-columns: 2fr 1fr; 
        grid-gap: 0.5rem; 
    }
    .stars {
        display: flex;
    }
    .stars > p {
        align-self: center;
        margin: 0; 
    }

</style>