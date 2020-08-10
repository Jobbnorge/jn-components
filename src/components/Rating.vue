<template>
    <div>
        <JnStars  @rating-selected="showRating" />
        <p>Vanlig stjerne-rangering fra 0 - 5</p>
        <JnStars @rating-selected="showRating" :value=0 hideRating />
        <p>Uten tekst på høyre side men hooker seg på rating-event --> {{ratingAsText}}</p>
        <JnStars :showAmount=2 readOnly />
        <p>Forhåndsdefinert verdi som ikke kan endres</p>
        <JnStars :showAmount=1 :max=1 :value=4.5 :size=25 :increment=0.5 readOnly hideRating />
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
            this.ratingAsText = `${e}`
        }
    }
}
</script>
