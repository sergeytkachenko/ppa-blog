"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var checkbox_1 = require('@angular2-material/checkbox');
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('./components/toolbar');
var AngularAppComponent = (function () {
    function AngularAppComponent() {
        this.title = 'angular works!';
    }
    AngularAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'angular-app',
            templateUrl: 'angular.component.html',
            styleUrls: ['angular.component.css'],
            directives: [checkbox_1.MdCheckbox, card_1.MdCard, toolbar_1.Toolbar, button_1.MdButton]
        }), 
        __metadata('design:paramtypes', [])
    ], AngularAppComponent);
    return AngularAppComponent;
}());
exports.AngularAppComponent = AngularAppComponent;
//# sourceMappingURL=/Users/s/WebstormProjects/ppa-blog/angular/tmp/broccoli_type_script_compiler-input_base_path-xTHQ0e5l.tmp/0/app/angular.component.js.map