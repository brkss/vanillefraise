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
exports.MoodRecord = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Mood_1 = require("./Mood");
const User_1 = require("../User");
let MoodRecord = class MoodRecord extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MoodRecord.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], MoodRecord.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MoodRecord.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Mood_1.Mood),
    (0, typeorm_1.ManyToOne)(() => Mood_1.Mood, mood => mood.records, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Mood_1.Mood)
], MoodRecord.prototype, "mood", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User),
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.moodrecords, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", User_1.User)
], MoodRecord.prototype, "user", void 0);
MoodRecord = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('moods_records')
], MoodRecord);
exports.MoodRecord = MoodRecord;
//# sourceMappingURL=MoodRecord.js.map