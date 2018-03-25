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
var PepoleInfoComponent = /** @class */ (function () {
    function PepoleInfoComponent() {
        this.arr = JSON.parse("[\n  {\n      \"id\": 0,\n      \"name\": \"Carrillo Stewart\",\n      \"gender\": \"male\",\n      \"favoriteFruit\": \"melon\"\n  },\n  {\n      \"id\": 1,\n      \"name\": \"Ramos Wall\",\n      \"gender\": \"male\",\n      \"favoriteFruit\": \"strawberry\"\n  },\n  {\n      \"id\": 2,\n      \"name\": \"Figueroa Sampson\",\n      \"gender\": \"male\",\n      \"favoriteFruit\": \"mango\"\n  },\n  {\n      \"id\": 3,\n      \"name\": \"Marsh Stanley\",\n      \"gender\": \"male\",\n      \"favoriteFruit\": \"melon\"\n  },\n  {\n      \"id\": 4,\n      \"name\": \"Rush Mcmahon\",\n      \"gender\": \"male\",\n      \"favoriteFruit\": \"apple\"\n  },\n  {\n      \"id\": 5,\n      \"name\": \"Downs Meyer\",\n      \"gender\": \"male\",\n      \"favoriteFruit\": \"strawberry\"\n  },\n  {\n      \"id\": 6,\n      \"name\": \"Yesenia Mcgee\",\n      \"gender\": \"female\",\n      \"favoriteFruit\": \"mango\"\n  },\n  {\n      \"id\": 7,\n      \"name\": \"Charlene Jacobs\",\n      \"gender\": \"female\",\n      \"favoriteFruit\": \"melon\"\n  \n  }\n]");
    }
    PepoleInfoComponent.prototype.ngOnInit = function () {
    };
    PepoleInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-pepole-info',
            templateUrl: './pepole-info.component.html',
            styleUrls: ['./pepole-info.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PepoleInfoComponent);
    return PepoleInfoComponent;
}());
exports.PepoleInfoComponent = PepoleInfoComponent;
//# sourceMappingURL=pepole-info.component.js.map