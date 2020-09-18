const path = require('path')
module.exports = {
    sections: [
        {
            components: 'src/ui_components/**/*.vue'
        }
    ],
    require: [
        path.join(__dirname, 'assets/css/bootstrap.min.css'),
        path.join(__dirname, 'assets/css/bootstrap_limitless.css'),
        path.join(__dirname, 'assets/css/Jobbadmin_responsive.css'),
        path.join(__dirname, 'src/Jn_fontawesome.js')
    ],
    styleguideDir: "dist/docs",
    title: "Documentation for ui-components",
    theme: {
        color:{
            base: '#378663', //Tittel, tabelltitler
            light: '#72616C', // filsti, Props, Methods..., VIEW CODE, Filter by name
            lightest: '#ccc',
            link: '#393036',
            linkHover: '#D41472',
            focus: 'rgba(22, 115, 177, 0.25)',
            border: '#C4EAD2',
            name: '#690',
            type: '#905',
            error: '#c00',
            baseBackground: '#fff',
            codeBackground: '#f5f5f5',
            sidebarBackground: '#C4EAD2',
            ribbonBackground: '#e90',
            ribbonText: '#fff',
            codeBase: '#333',
            codeComment: '#6d6d6d',
            codePunctuation: '#999',
            codeProperty: '#905',
            codeDeleted: '#905',
            codeString: '#690',
            codeInserted: '#690',
            codeOperator: '#9a6e3a',
            codeKeyword: '#1673b1',
            codeFunction: '#DD4A68',
            codeVariable: '#e90',
        }
    }
   
}


