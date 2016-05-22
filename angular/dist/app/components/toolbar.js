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
var toolbar_1 = require('@angular2-material/toolbar');
var Toolbar = (function () {
    function Toolbar() {
        this.color = 'primary';
    }
    Toolbar = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'toolbar',
            templateUrl: 'toolbar.html',
            styleUrls: ['toolbar.css'],
            directives: [toolbar_1.MdToolbar]
        }), 
        __metadata('design:paramtypes', [])
    ], Toolbar);
    return Toolbar;
}());
exports.Toolbar = Toolbar;
//# sourceMappingURL=/Users/s/WebstormProjects/ppa-blog/angular/tmp/broccoli_type_script_compiler-input_base_path-xTHQ0e5l.tmp/0/app/components/toolbar.js.map