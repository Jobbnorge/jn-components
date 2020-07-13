<template>
    <div class="initials" :class="colorClass" @click="$emit('avatarClicked')">{{initials}}</div>
</template>

<script>
import _ from "lodash";

export default {
    name: "JnAvatar",
    props: {
        firstName: String,
        lastName: String,
        fullName: String,
        rawText: String,
        color: String,
        id: Number,
        clickable: {
            type: Boolean,
            default: false 
        },
        hoverable: {
            type: Boolean,
            default: false 
        }
    },
    data: function() {
        return {
            colors: ['pink','green','blue','grey']  
        }        
    },
    methods: {
        colorfromindex : function() {            
            return this.colors[this.id%this.colors.length]
        }
    },
    computed: {
        initials : (vm) => {
           if(vm.fullName) {
               const names = vm.fullName.split(' ');
               return `${names[0].charAt(0)}${names[names.length-1].charAt(0)}`
           }
           else if(vm.rawText) {
               return vm.rawText
           }
           else {
                var firstNameInitials = _.first(vm.firstName.split(' ')).split('-').map(n => n.charAt(0)).join('');
                var lastNamesInitials = _.last(vm.lastName.split(' ')).split('-').map(n => n.charAt(0)).join('');

                return `${firstNameInitials}${lastNamesInitials}`
           } 

        },
        colorClass: (vm) => {
            var color = vm.color || vm.colorfromindex()
            if(vm.clickable) {
                return `click ${color} `
            }
            else if(vm.hoverable) {
                return `hoverable ${color}`
            }
            else {
                return color 
            }
        }
    }
}
</script>

<style>
    .initials {
        height: 3em;
        width: 3em;
        line-height: 3em;
        margin: auto;  
        border-radius: 50%;  
        text-align: center;
        box-sizing: border-box;
    }
    .click {
        cursor: pointer;
    }

    .pink {
        background: #FFEEF6;
        color: #D41472;
        border: 1px solid transparent;
    }
    .click.pink:hover {
        border: 1px solid #D41472; 
    }

    .grey {
        background: #F6F5F6;
        color: #44303C;
        border: 1px solid transparent;
    }
    .click.grey:hover {
        border: 1px solid #44303c; 
    }

    .blue {
        background: #E8F5FA;
        color: #127DAC;
        border: 1px solid transparent;
    }
    .click.blue:hover {
        border: 1px solid #127dac; 
    }

    .green {
        background: #D3F5DF;
        color: #1D764F;
        border: 1px solid transparent;
    }
    .click.green:hover {
        border: 1px solid #1D764F; 
    }
    .hoverable {
        cursor: pointer; 
    }



</style>