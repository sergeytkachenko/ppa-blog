"use strict";
var testing_1 = require('@angular/core/testing');
var angular_component_1 = require('../app/angular.component');
testing_1.beforeEachProviders(function () { return [angular_component_1.AngularAppComponent]; });
testing_1.describe('App: Angular', function () {
    testing_1.it('should create the app', testing_1.inject([angular_component_1.AngularAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'angular works!\'', testing_1.inject([angular_component_1.AngularAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('angular works!');
    }));
});
//# sourceMappingURL=/Users/s/WebstormProjects/ppa-blog/angular/tmp/broccoli_type_script_compiler-input_base_path-xTHQ0e5l.tmp/0/app/angular.component.spec.js.map