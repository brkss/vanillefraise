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
exports.DietRecordResolver = void 0;
const responses_1 = require("../../utils/responses");
const type_graphql_1 = require("type-graphql");
const createrecord_input_1 = require("../../utils/inputs/diet/createrecord.input");
const auth_mw_1 = require("../../utils/middlewares/auth.mw");
const User_1 = require("../../entity/User");
const Record_1 = require("../../entity/Diet/Record");
let DietRecordResolver = class DietRecordResolver {
    async createDietRecord(data, ctx) {
        if (!data || !data.unit || !data.type || !data.value)
            return {
                status: false,
                message: "Invalid Data",
            };
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user) {
            return {
                status: false,
                message: "invalid user !",
            };
        }
        if (data.type.toUpperCase() === "WEIGHT")
            user.weight = data.value;
        if (data.type.toUpperCase() === "HEIGHT")
            user.height = data.value;
        await user.save();
        const record = new Record_1.DietRecord();
        record.user = user;
        record.value = data.value;
        record.unit = data.unit;
        record.type = data.type;
        await record.save();
        return {
            status: true,
            message: "Diet Record Created Successfuly",
        };
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => responses_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createrecord_input_1.CreateDietRecordInput, Object]),
    __metadata("design:returntype", Promise)
], DietRecordResolver.prototype, "createDietRecord", null);
DietRecordResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], DietRecordResolver);
exports.DietRecordResolver = DietRecordResolver;
//# sourceMappingURL=record.resolver.js.map