/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
            '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
            '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
            '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'node_modules/@angular/upgrade/bundles/upgrade.umd.js',
            'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
            // other libraries
            'rxjs':                      'node_modules/rxjs',

            // ng2-bootstrap
            'moment': 'node_modules/moment/min',
            'ngx-bootstrap':              'node_modules/ngx-bootstrap',
            'JQuery':                'node_modules/jquery',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
            // ng2-bootstrap
            'ngx-bootstrap':              { format: 'cjs', main: 'bundles/ngx-bootstrap.umd.js', defaultExtension: 'js' },
            'moment':                     { main: 'moment.min.js', defaultExtension: 'js' },
            'JQuery':                     { main: 'jquery.js', defaultExtension: 'js' },
        }
    });
})(this);