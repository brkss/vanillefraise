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
exports.CreateRecordResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Record_1 = require("../../entity/Record");
const records_1 = require("../../utils/inputs/records");
const records_2 = require("../../utils/responses/records");
const auth_mw_1 = require("../../utils/middlewares/auth.mw");
const User_1 = require("../../entity/User");
let CreateRecordResolver = class CreateRecordResolver {
    async createRecord(data, ctx) {
        if (!data || !data.date || !data.category || !data.time || !data.value || !ctx.payload || !ctx.payload.userID) {
            return {
                status: false,
                message: "Invalid Data !"
            };
        }
        try {
            const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
            const category = await Record_1.RecordCategory.findOne({ where: { id: data.category } });
            if (!category || !user) {
                return {
                    status: false,
                    message: "Category not found !"
                };
            }
            const record = new Record_1.Record();
            record.category = category;
            record.user = user;
            record.value = data.value;
            record.time = data.time;
            record.date = data.date;
            await record.save();
            return {
                status: true,
                message: "Record Created successfuly !",
                record: record
            };
        }
        catch (e) {
            console.log("Sonmething went wrong creating record : ", e);
            return {
                status: false,
                message: "Something went wrong !"
            };
        }
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => records_2.CreateRecordResponse),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [records_1.CreateRecordInput, Object]),
    __metadata("design:returntype", Promise)
], CreateRecordResolver.prototype, "createRecord", null);
CreateRecordResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CreateRecordResolver);
exports.CreateRecordResolver = CreateRecordResolver;
//# sourceMappingURL=create.resolver.js.map