var Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    // the project directory where all compiled assets will stored
    .setOutputPath('public/build/')

    // public path used by the web server to access the output path
    .setPublicPath('/build')

    // will create public/build/rep_log.js
    .addEntry('rep_log', './assets/js/rep_log.js')
    .addEntry('login', './assets/js/login.js')
    .addEntry('layout', './assets/js/layout.js')

    .enableBuildNotifications()
    .autoProvidejQuery()
    .addPlugin(new CopyWebpackPlugin([
        // copies to {output}/static
        { from: './assets/static', to: 'static'}
    ]))
;

// export the final configuration
module.exports = Encore.getWebpackConfig();
