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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Comp1Component = /** @class */ (function () {
    function Comp1Component() {
    }
    Comp1Component.prototype.ngOnInit = function () {
    };
    Comp1Component = __decorate([
        core_1.Component({
            selector: 'app-comp1',
            templateUrl: './comp1.component.html',
            styleUrls: ['./comp1.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], Comp1Component);
    return Comp1Component;
}());
exports.Comp1Component = Comp1Component;
//# sourceMappingURL=comp1.component.js.map