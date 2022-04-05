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
exports.RecordListResolver = void 0;
const type_graphql_1 = require("type-graphql");
const middlewares_1 = require("../../utils/middlewares");
const Record_1 = require("../../entity/Record");
const records_1 = require("../../utils/responses/records");
const User_1 = require("../../entity/User");
let RecordListResolver = class RecordListResolver {
    async records(cat_id, ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        const category = await Record_1.RecordCategory.findOne({ where: { id: cat_id } });
        if (!user || !category) {
            return {
                status: false,
                message: "Invalid Category !",
            };
        }
        return {
            status: true,
            records: await Record_1.Record.find({
                where: { user: user, category: category },
                relations: ["category"],
            }),
        };
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => records_1.ListRecordsResponse),
    __param(0, (0, type_graphql_1.Arg)("cat_id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RecordListResolver.prototype, "records", null);
RecordListResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RecordListResolver);
exports.RecordListResolver = RecordListResolver;
//# sourceMappingURL=list.resolver.js.map