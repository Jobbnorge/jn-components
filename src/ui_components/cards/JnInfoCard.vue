<template>
    <article class="info-wrapper" v-if="showInfoCard">
        <button class="btn end muted" type="button" v-if="removable" @click="hideInfoCard">
            <fa-icon :icon="['fas', 'times']" />
        </button>
        <div>
            <fa-icon :icon="['fal', icon]" color="#127dac" size="2x" />
            <header>
                <h1 class="info-header">{{title}}</h1>
            </header>
            <section>
                <p>{{body}}</p>
            </section>
        </div>
    </article>
</template>
<script>
export default {
    name: "JnInfoCard",
    props: {
        title: String,
        body: String,
        icon: {
            type: String, 
            default: "info-circle"
        },
        removable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showInfoCard: true  
        }
    },
    methods: {
        hideInfoCard(evt) {
            this.showInfoCard = false;
            this.$emit('infoCardHidden', evt);
        }
    }
}
</script>
<style scoped>
    .info-wrapper {
        display: grid; 
        color: #44303C;
        background: #F6F5F6;
        border: 1px solid #F1F1F1;
        box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.12);
        padding: 0.5rem; 
    }
    .info-wrapper > div {
        display: grid; 
        grid-template-columns: 50px auto 
    }
    .info-header {
        font-size: 1.125rem;
    }
    section {
        grid-column: 2; 
    }
    .muted {
        color: #72616C;
    }
    .end {
        justify-self: end;
    }
</style>