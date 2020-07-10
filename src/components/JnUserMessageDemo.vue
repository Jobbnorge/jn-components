<template>
    <div>
        <JnUserMessage v-for="message in mockData" :key="mockData.indexOf(message)"
        :isLoggedInUser="message.isAuthor"
        :showBadge="message.unread"
        :author="message.author"
        :sent="message.date"
        >
        <template #message-body>{{message.message}}</template>
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
                date:"$date('2020-05-25 12:24:05')",
                author:"Bjarke Nitritius Rødpølse",
                message:"Heij",
                unread:false,
                tagged:false,
                isAuthor: false
                },
                {
                date:"$date('2020-05-25 12:44:05')",
                author:"Tester Testersen",
                message:"Hallo du!",
                unread:false,
                tagged:false,
                isAuthor: true
                },
                {
                date:"$date('2020-05-25 13:24:05')",
                author:"Hans Hansen",
                message:"Flott vær i dag du @Tagget Bruker",
                unread:false,
                tagged:true
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
