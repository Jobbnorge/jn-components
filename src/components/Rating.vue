<template>
    <div>
        <span>{{ratingAsText}}</span>
        <JnStars  @rating-selected="showRating" />
        <p>Vanlig stjerne-rangering fra 0 - 5</p>
        <JnStars :showAmount=2 readOnly />
        <p>Forhåndsdefinert verdi som ikke kan endres</p>
        <JnStars :showAmount=1 :max=1 :value=4 :size=25  />
        <p>Alternativ presentasjon med enkelt-stjerne og antall</p>
      
    </div>
</template>
<script>
import JnStars from "./../ui_components/assessment/JnStars"
export default {
    name:"Rating",
    components: "JnStars",
    data() {
        return {
            ratingAsText: ""
        }
    },
    methods: {
        showRating(e) {
            this.ratingAsText = `Antall stjerner: ${e}`
        }
    }
}
</script>
