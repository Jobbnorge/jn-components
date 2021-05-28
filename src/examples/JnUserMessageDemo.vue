<template>
    <div>
        <JnUserMessage v-for="message in mockData" :key="message.id"
        :isLoggedInUser="message.userFlags.isAuthor"
        :showBadge="message.userFlags.unread"
        :author="message.author.name"
        :sent="message.date"
        :authorId="message.author.id"
        >
        <template #message-body>{{message.message}}</template>
        </JnUserMessage>
    </div>
</template>
<script>
import JnUserMessage from "../ui_components/containers/JnUserMessage";
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
                id: 1232654,
                date:"$date('2020-05-25 12:24:05')",
                author: {
                    name: "Bjarke Nitritius Rødpølse",
                    id: 123
                },
                userFlags: {
                    unread:false,
                    tagged:false,
                    isAuthor: false
                },
                message:"Heij",
                },
                {
                id: 7894561,
                date:"$date('2020-05-25 12:24:05')",
                author: {
                    name: "Arne Per",
                    id: 456
                },
                userFlags: {
                    unread:false,
                    tagged:false,
                    isAuthor: true
                },
                message:"Heia du!",
                },
                {
                id: 7894563123,
                date:"$date('2020-05-25 12:24:05')",
                author: {
                    name: "Lene Nilsen",
                    id: 789
                },
                userFlags: {
                    unread:true,
                    tagged:true,
                    isAuthor: false
                },
                message:"Flotters, da fikser du det @Arne Per?",
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
