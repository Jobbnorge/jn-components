const path = require('path')
module.exports = {
    sections: [
        {
            name: 'ui-components',
            components: 'src/ui_components/**/*.vue'
        }
    ],
    require: [
        path.join(__dirname, 'assets/css/bootstrap.min.css'),
        path.join(__dirname, 'assets/css/bootstrap_limitless.css'),
        path.join(__dirname, 'assets/css/Jobbadmin_responsive.css')
    ],
    styleguideDir: "public/docs"
}