<template>
<div>
    <div>
        <h4>Helt vanlig avatar</h4>
        <Avatar firstName="Marit" lastName="Larsen" :id="2" />
    </div>
    <div class="mini">
        <h4>Mini avatar -bare å endre fontstørrelse</h4>
        <Avatar firstName="Kåre" lastName="Jensen" color="green" />
        <Avatar fullName="Jens Jensen" color="blue" />
    </div>
    <div class="super-avatar">
        <h4>Klikkbar "avatar" med v-popover (funker ikke i styleguide)</h4>
        <v-popover
            offset="16"
        >
        <Avatar rawText="+2" :id="3" clickable />
            <template slot="popover">
                <div class="mini">
                    <div class="user">
                        <Avatar firstName="Lise" lastName="Andersen" :id="3" />
                        <span>Lise Andersen</span>
                    </div>
                    <div class="user">
                        <Avatar firstName="Jens" lastName="Johansen" :id="2" />
                        <span>Jens Johansen</span>
                    </div>
                </div>
                <button type="button" class="btn btn-primary" v-close-popover>Lukk</button>
            </template>
        </v-popover>
    </div>
    <div>
        <h4>Tooltip Avatar</h4>
        <Avatar firstName="Gunnar" lastName="Rødberg" color="pink" hoverable
        v-tooltip="{
            content: tooltip,
            placement: 'bottom-center',
            classes: ['info'],
            targetClasses: ['it-has-a-tooltip'],
            delay: {
                show: 300,
                hide: 200,
            },
        }"
        
        
        />
    </div>
</div>
</template>
<script>
import Avatar from "../ui_components/misc/Avatar"; 
export default {
    name: "AvatarExample", 
    components: {
        Avatar
    },
    data() {
        return {
            tooltip: "Gunnar Rødberg"
        }
    }
}
</script>
<style scoped>
.super-avatar {
    margin-top: 2rem; 
}
.mini {
    font-size: 0.6rem; 
}
.user {
    display: grid; 
    grid-template-columns: 1fr 2fr;
    align-items: center;
    margin-bottom: .5rem; 
}
.user > span {
    margin-left: .5rem; 
    font-size: 1rem; 

}
</style>