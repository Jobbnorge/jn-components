<template>
    <div>
        <JnUserMessage v-for="message in mockData" :key="mockData.indexOf(message)"
        :messageDetails = message
        :isLoggedInUser="checkSender(message.userId)"
        :showBadge="message.unread"
        >
        <template #message-body>{{message.text}}</template>
        </JnUserMessage>
    </div>
</template>
<script>
import JnUserMessage from "../ui_components/misc/JnUserMessage";
export default {
    name: "JnUserMessageDemo",
    components: {
        JnUserMessage
    },
    data() {
        return {
            unread: false,
            loggedInUser: 321, 
            mockData: [
                {
                    unread: false,
                    firstName: "Lars",
                    lastName: "Eliassen",
                    userId: 123,
                    sent: "08:21",
                    text: "Heia, syns ikke du at det er litt rart at kandidaten har oppgitt å jobbe to steder samtidig 100% ? Jeg syns i hvertfall at vi bør undersøke dette nærmere fordi vi skal være årvåkne ovenfor juks"
                },
                {
                    unread: false,
                    firstName: "Vilje",
                    lastName: "Bech",
                    userId: 321,
                    sent: "09:11",
                    text: "Oi! Såpass ja :O Men da må vi jo nesten undersøke det nærmere"
                },
                {
                    unread: true, 
                    firstName: "Emmy",
                    lastName: "Sortland",
                    userId: 456,
                    sent: "10:32",
                    text: "Jeg kan gjøre det!"
                }
            ]
        }
    },
    methods: {
        checkSender(id) {
            if(id == this.loggedInUser) {
                return true
            }
            else {
                return false 
            }
        }
    }
}

</script>
