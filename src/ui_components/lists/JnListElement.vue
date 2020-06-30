<template>
    <!-- <li -->
    <li
        class="grid-wrapper"
        v-bind:class="{ borderBetween: borderBetweenElements, grow: navigable }"
        @click="navigable ? navigate() : null "
        >
        <slot name="left-side">
            <i class="icon"><fa-icon :icon="['fal', icon]" size="lg"/></i>
        </slot>
        <div>
            <p v-if="secondaryText" class="secondary-text">{{secondaryText}}</p>
            <p class="title">{{title}}</p>
        </div>
            <div v-if="navigable">
                <i v-if="isExternal" class="center"><fa-icon :icon="['fal','external-link']" class="icon" size="lg"/></i>
                <i v-else class="center"><fa-icon :icon="['fal', 'chevron-right']" class="icon" size="lg"/></i>
            </div>
            <div v-if="!navigable">
                <slot name="right-side"></slot>
            </div>
    </li>
    <!-- </li> -->
</template>

<script>
export default {
    
    name: "JnList",
    props: {
        
        icon: String,
        title: String,
        secondaryText: String,
        /** Viser enten ekstern eller intern ikon for navigering*/
        isExternal: Boolean,
        url: String,
        /**
         * Streker vises mellom elementene
         */
        borderBetweenElements: Boolean,
        /**
         * Viser at elementer kan klikkes på og viser navigeringsikon (ekstern eller intern)
        */
        navigable: Boolean
    },
    methods: {
        navigate(){
            window.location.href = this.url
        }
    }
}
</script>

<style scoped>

    .grid-wrapper{
        display: grid;
        grid-template-columns: 1fr 6fr 1fr;
        align-items: center;
        color: #44303C;
        padding: 5px 0 5px 0;
        column-gap: 0.5rem;
    }
    .icon{
        margin-left: 0.5rem;
    }
    .title{
        margin-bottom: 0.5rem;
    }
    .secondary-text{
        color: #127DAC;
        font-size: 0.75rem;
        margin: 0.5rem 0 0.25rem 0;
    }
    .borderBetween{
        border-bottom: 1px solid rgba(68, 48, 60, 0.3);
    }
    .grow{
        transition: all .2s ease-in;
    }
    .grow:hover{
        transform: scale(1.03);
    }
    a:link{
        color:#44303C;
        text-decoration: none;
    }
    a:visited{
        color:#44303C;
    }
    a:hover{
        color:#44303C;
    }
    a:active{
        color:#44303C;
    }
    .center{
        justify-self: center;
    }
</style>