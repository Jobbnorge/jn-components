<template>
    <table>
        <tr class="table-header">
            <th v-for="col in columns" 
            :key="col" 
            :class="sortable ? 'th-sortable' : ''"
            @click="handleClick(columns.indexOf(col))"
            >
                <span class="head">
                    {{col}}
                    <FontAwesomeIcon v-if="sortable" :icon="icon[sortKey]" class="icon sort-icon"></FontAwesomeIcon>
                </span>
            </th>
        </tr>
        <slot name="table-data"></slot>
    </table>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { faSort, faSortUp, faSortDown } from "@fortawesome/pro-light-svg-icons";

fontAwesomeConfig.autoAddCss = false;

export default {
    components: {
        FontAwesomeIcon
    }, 
    props: {
        columns: Array,
        sortable: Boolean
    },
    data() {
        return {
            icon: [faSort, faSortDown, faSortUp],
            sortingDir: ['none', 'asc', 'desc'],
            sortKey: 0
        }
    },
    methods: {
        handleClick(index) {

        if(this.sortKey < 2) {
            this.sortKey += 1
        }
        else {
            this.sortKey = 0
        }

        this.$emit('sort', [index, this.sortingDir[this.sortKey]]);
        }
    }
    
}
</script>
<style scoped>
table {
    width: 100%; 
    border-spacing: 0.5rem; 
}
table, th, td {
  padding: 0.5rem; 
}
.table-header {
    border-bottom: 1px solid #44303C; 
}
.head {
    display:flex; 
    align-items: center;
}
.sort-icon {
    width: 0.8rem;
    height: 0.8rem; 
    margin-left: 0.3rem; 
}
.th-sortable {
    cursor: pointer; 
}
.th-sortable:hover {
    background-color: #E8F5FA; 
}
</style>