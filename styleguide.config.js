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
        path.join(__dirname, 'src/fontawesome.js'),
        path.join(__dirname, 'styleguidist.css')
    ],
    styleguideDir: "public/docs",
    title: "Documentation for ui-components"
   
}


