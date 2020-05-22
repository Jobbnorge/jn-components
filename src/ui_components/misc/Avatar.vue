<template>
    <div class="initials" :class="colorClass">{{initials}}</div>
</template>

<script>
export default {
    name: "Avatar",
    props: {
        firstName: String,
        lastName: String,
        color: String,
        id: Number
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
           var firstNames = vm.firstName.split(' ')[0].split('-');
           var lastNames = vm.lastName.split(' ')[0].split('-');

           return `${firstNames.map(n => n.charAt(0)).join('')}${lastNames.map(n => n.charAt(0)).join('')}`
        },
        colorClass: (vm) => vm.color || vm.colorfromindex() 
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
    }

    .pink {
        background: #FFEEF6;
        color: #D41472;
    }

    .grey {
        background: #F6F5F6;
        color: #44303C;
    }

    .blue {
        background: #E8F5FA;
        color: #127DAC;
    }

    .green {
        background: #D3F5DF;
        color: #1D764F;
    }



</style>