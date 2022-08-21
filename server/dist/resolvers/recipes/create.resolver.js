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
exports.CreateRecipeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const responses_1 = require("../../utils/responses");
const create_1 = require("../../utils/helpers/recipe/create");
let CreateRecipeResolver = class CreateRecipeResolver {
    async createRecipeTest(url) {
        if (!url)
            return {
                status: false,
                message: "Invalid data !",
            };
        const created = await (0, create_1.create_recipe)(url, [
            "92d964fa-5b15-4b76-8dfc-3ad180fdcdaa",
        ]);
        if (!created) {
            return {
                status: false,
                message: "Something went wrong !",
            };
        }
        return {
            status: true,
            message: "Success !",
        };
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => responses_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("url")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CreateRecipeResolver.prototype, "createRecipeTest", null);
CreateRecipeResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CreateRecipeResolver);
exports.CreateRecipeResolver = CreateRecipeResolver;
//# sourceMappingURL=create.resolver.js.map