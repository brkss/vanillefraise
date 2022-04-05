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
exports.Mood = void 0;
const typeorm_1 = require("typeorm");
const MoodRecord_1 = require("./MoodRecord");
const type_graphql_1 = require("type-graphql");
let Mood = class Mood extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Mood.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Mood.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Mood.prototype, "icon", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Mood.prototype, "active", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [MoodRecord_1.MoodRecord]),
    (0, typeorm_1.OneToMany)(() => MoodRecord_1.MoodRecord, records => records.mood),
    __metadata("design:type", Array)
], Mood.prototype, "records", void 0);
Mood = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('moods')
], Mood);
exports.Mood = Mood;
//# sourceMappingURL=Mood.js.map