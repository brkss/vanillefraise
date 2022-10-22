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
const createrecipe_input_1 = require("../../utils/inputs/recipes/createrecipe.input");
let CreateRecipeResolver = class CreateRecipeResolver {
    async createRecipe(data) {
        if (!data || !data.url || data.categories.length === 0)
            return {
                status: false,
                message: "Invalid data !",
            };
        try {
            const created = await (0, create_1.create_recipe)(data.url, data.categories);
            if (!created.success) {
                return {
                    status: false,
                    message: created.message || "Something went wrong !",
                };
            }
            return {
                status: true,
                message: "Success !",
                recipe: created.recipe,
            };
        }
        catch (e) {
            console.log("error accured creating recipe : ", e);
            return {
                status: false,
                message: "Something went wrong !",
            };
        }
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => responses_1.CreateRecipeResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createrecipe_input_1.CreateRecipeInput]),
    __metadata("design:returntype", Promise)
], CreateRecipeResolver.prototype, "createRecipe", null);
CreateRecipeResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CreateRecipeResolver);
exports.CreateRecipeResolver = CreateRecipeResolver;
//# sourceMappingURL=create.resolver.js.map