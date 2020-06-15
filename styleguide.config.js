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
            base: '#333',
            light: '#767676',
            lightest: '#ccc',
            link: '#1673b1',
            linkHover: '#e90',
            focus: 'rgba(22, 115, 177, 0.25)',
            border: '#e8e8e8',
            name: '#690',
            type: '#905',
            error: '#c00',
            baseBackground: '#fff',
            codeBackground: '#f5f5f5',
            sidebarBackground: '#f5f5f5',
            ribbonBackground: '#e90',
            ribbonText: '#fff'
        },
        fontFamily:{
            base: 'Roboto'
        }
    }
   
}


