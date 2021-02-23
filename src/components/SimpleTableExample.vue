<template>
    <SimpleTable 
    :columns="tableHeader" 
    sortable
    v-on:sort="sortBy"
    >
        <template #table-data>
            <tr v-for="row in sortedData" :key="row.name">
                    <td>{{row.name}}</td>
                    <td>{{row.jobType}}</td>
                    <td>
                        <button>Handling 1 </button>
                        <button>Handling 2 </button>
                        <button>Handling 3 </button>
                    </td>
            </tr>
        </template>
    </SimpleTable>
</template>

<script>
import SimpleTable from "./../ui_components/layout/SimpleTable.vue"

export default {
    name: "SimpleTableExample", 
    components: {
        SimpleTable
    },
    data() {
        return {
            tableHeader: ["Malnavn", "Standard for", "Handlinger"],
            tableData: [
                {"name": "Aspirantopptak", "jobType": "Aspirantopptak"},
                {"name": "Utenrikstjeneste", "jobType": null},
                {"name": "Administrative jobber", "jobType": null},
                {"name": "IT / Drift", "jobType": "Ingeniør"},
                {"name": "Diplomat", "jobType": "Diplomat"},
                {"name": "Sommerjobb", "jobType": "Trainee"},
            ],
            currentSort: "name",
            curerentSortDir: "asc"
        }
    },
    computed:{
        sortedData: function() {
            return this.tableData.sort((a,b) => {
                let modifier = 1;
                if(this.currentSortDir === 'desc') modifier = -1;
                if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                return 0;
            });
        }
    },
    methods:{
        sortBy: function(key) {
            if(key == 0) {
                this.sort('name')
            }
            if(key == 1) {
                this.sort('jobType')
            }
        },
        sort:function(key) {
            if(this.currentSort === key){
                this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
            } else {
                this.currentSort = key;
            }
        }
    }
}
</script>