/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {};
/** User packages configuration. */
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js',
        '@angular2-material/core': 'vendor/@angular2-material/core/core.js',
        '@angular2-material/checkbox': 'vendor/@angular2-material/checkbox/checkbox.js',
        '@angular2-material/toolbar': 'vendor/@angular2-material/toolbar/toolbar.js',
        '@angular2-material/card': 'vendor/@angular2-material/card/card.js',
        '@angular2-material/button': 'vendor/@angular2-material/button/button.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=/Users/s/WebstormProjects/ppa-blog/angular/tmp/broccoli_type_script_compiler-input_base_path-xTHQ0e5l.tmp/0/system-config.js.map