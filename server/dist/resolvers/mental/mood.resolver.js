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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoodResolver = void 0;
const middlewares_1 = require("../../utils/middlewares");
const type_graphql_1 = require("type-graphql");
const Mental_1 = require("../../entity/Mental");
const mood_data_1 = require("../../utils/data/mood.data");
const responses_1 = require("../../utils/responses");
const User_1 = require("../../entity/User");
const mental_1 = require("../../utils/inputs/mental");
let MoodResolver = class MoodResolver {
    async seedMoodCategories() {
        const moods = await Mental_1.Mood.find();
        if (moods.length == 0) {
            for (let m of mood_data_1.moods_data) {
                const mood = new Mental_1.Mood();
                mood.name = m.name;
                mood.icon = m.icon;
                await mood.save();
            }
            return true;
        }
        return false;
    }
    async moods() {
        return await Mental_1.Mood.find();
    }
    async createMoodRecord(data, ctx) {
        if (!data || !data.moods || data.moods.length == 0) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        try {
            const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
            const moods = [];
            for (let moodId of data.moods) {
                const mood = await Mental_1.Mood.findOne({ where: { id: moodId } });
                if (mood)
                    moods.push(mood);
            }
            if (!user || moods.length !== data.moods.length) {
                return {
                    status: false,
                    message: "Invalid User !",
                };
            }
            for (let mood of moods) {
                const record = new Mental_1.MoodRecord();
                record.mood = mood;
                record.user = user;
                record.date = new Date();
                await record.save();
            }
            return {
                status: true,
                message: "Mood Record Created Successfuly !",
            };
        }
        catch (e) {
            console.log("Something went wrong while creating mood record : ", e);
            return {
                status: false,
                message: "Something went wrong !",
            };
        }
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoodResolver.prototype, "seedMoodCategories", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Mental_1.Mood]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoodResolver.prototype, "moods", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => responses_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mental_1.CreateMoodRecordInput, Object]),
    __metadata("design:returntype", Promise)
], MoodResolver.prototype, "createMoodRecord", null);
MoodResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], MoodResolver);
exports.MoodResolver = MoodResolver;
//# sourceMappingURL=mood.resolver.js.map