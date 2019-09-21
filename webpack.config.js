var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where all compiled assets will stored
    .setOutputPath('public/build/')

    // public path used by the web server to access the output path
    .setPublicPath('/build')

    // will create public/build/rep_log.js
    .addEntry('rep_log', './public/assets/js/RepLogApp.js')

    .enableBuildNotifications()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();
