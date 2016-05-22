"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var angular_component_1 = require('./app/angular.component');
var environment_1 = require('./app/environment');
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(angular_component_1.AngularAppComponent).then(function () {
    Prism.highlightAll();
});
//# sourceMappingURL=/Users/s/WebstormProjects/ppa-blog/angular/tmp/broccoli_type_script_compiler-input_base_path-xTHQ0e5l.tmp/0/main.js.map