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
const donwloadImage_1 = require("../../utils/helpers/donwloadImage");
const Recipe_1 = require("../../entity/Recipe");
const responses_1 = require("../../utils/responses");
const createrecipe_input_1 = require("../../utils/inputs/recipes/createrecipe.input");
const recipes_1 = require("../../utils/inputs/recipes");
const nutrition_1 = require("../../utils/nutrition");
const Nutrition_1 = require("../../entity/Nutrition");
const recipe_ingredient_parser_v2_1 = require("recipe-ingredient-parser-v2");
const recipeScraper = require("recipe-scraper");
const helpers_1 = require("../../utils/helpers");
const translating_1 = require("../translating");
const refrence_1 = require("../../utils/data/translate/refrence");
const middlewares_1 = require("../../utils/middlewares");
const Admin_1 = require("../../entity/admin/Admin");
const translate = new translating_1.TranlatingResolver();
let CreateRecipeResolver = class CreateRecipeResolver {
    async createBulkRecipes(data, ctx) {
        if (!data || data.length === 0)
            return {
                status: false,
                message: "Invalid Data !",
            };
        const admin = await Admin_1.Admin.findOne({ where: { id: ctx.payload.adminID } });
        if (!admin) {
            return {
                status: false,
                message: "Invalid Admin",
            };
        }
        try {
            for (let r of data) {
                await this.createRecipe({ url: r.url, categories: r.categories });
            }
            return {
                status: true,
                message: "Recipes Added Successfuly !",
            };
        }
        catch (e) {
            console.log("Something went wrng adding recipes !", e);
            return {
                status: false,
                message: "Something went wrong !",
            };
        }
    }
    async createRecipe(data) {
        if (!data.url || data.categories.length == 0)
            return {
                message: "Invalid URl",
                status: false,
            };
        let recipe = null;
        try {
            const uri = data.url;
            const recipeCheck = await Recipe_1.Recipe.findOne({ where: { url: uri } });
            if (recipeCheck) {
                return {
                    message: "Recipe already exsit",
                    status: false,
                };
            }
            const recipe_data = await recipeScraper(uri);
            console.log("recipe data +++>> ", recipe_data);
            const img = `${recipe_data.name
                .split(" ")
                .join("_")}_${new Date().getTime()}.jpg`;
            console.log("OPTIMIZE IMAGE !");
            await (0, donwloadImage_1.downloadImage)(recipe_data.image, `../../cdn/images/${img}`);
            if (!recipe_data.servings) {
                return {
                    status: false,
                    message: "Invalid Recipe Servings ! ",
                };
            }
            recipe = new Recipe_1.Recipe();
            recipe.name = recipe_data.name;
            recipe.image = img;
            recipe.description = recipe_data.description;
            recipe.prep = recipe_data.time.prep;
            recipe.cook = recipe_data.time.cook;
            recipe.serving = parseInt(recipe_data.servings);
            recipe.total = recipe_data.time.total;
            recipe.url = uri;
            const categories = await this.getRecipeCategories(data.categories);
            if (categories.length !== data.categories.length) {
                return {
                    status: false,
                    message: "Error : Category not found !",
                };
            }
            recipe.categories = categories;
            await recipe.save();
            await this.createRecipeIngredients(recipe, recipe_data.ingredients);
            await this.createRecipeInstructions(recipe, recipe_data.instructions);
            const r = await Recipe_1.Recipe.findOne({
                where: { id: recipe.id },
                relations: ["ingredients"],
            });
            await this.createRecipeNutritionData(r, {
                name: recipe_data.name,
                ingr: recipe_data.ingredients,
            });
            return {
                status: true,
                message: "Recipe created successfuly ! ",
                recipe: recipe,
            };
        }
        catch (e) {
            if (recipe) {
                await recipe.remove();
            }
            console.log("something went wrong : ", e);
            return {
                message: "Something went wrong ",
                status: false,
            };
        }
    }
    async getRecipeCategories(cats) {
        let categories = [];
        for (let cat_id of cats) {
            const category = await Recipe_1.RecipeCategory.findOne({ where: { id: cat_id } });
            if (category)
                categories.push(category);
        }
        return categories;
    }
    async createRecipeIngredients(recipe, ings) {
        var _a;
        for (let ing of ings) {
            if (ing.length > 0) {
                const ingredient_parsed = (0, recipe_ingredient_parser_v2_1.parse)(ing);
                const ingredient = new Recipe_1.Ingredient();
                ingredient.raw = ing;
                ingredient.unit = ingredient_parsed.unit || undefined;
                ingredient.amount = (_a = ingredient_parsed.quantity) === null || _a === void 0 ? void 0 : _a.toString();
                ingredient.ingredients = ingredient_parsed.ingredient;
                ingredient.recipe = recipe;
                await ingredient.save();
                if (ingredient.unit)
                    await translate.translateAll(ingredient.unit, refrence_1.translated_text_refrence.ingredient_unit, ingredient.id);
                await translate.translateAll(ingredient.ingredients, refrence_1.translated_text_refrence.ingredient_txt, ingredient.id);
            }
        }
    }
    async createRecipeInstructions(recipe, insts) {
        let index = 0;
        for (let inst of insts) {
            if (inst.length > 0) {
                const instruction = new Recipe_1.Instruction();
                instruction.index = index + 1;
                instruction.recipe = recipe;
                instruction.raw = inst;
                index++;
                await instruction.save();
                await translate.translateAll(inst, refrence_1.translated_text_refrence.instruction, instruction.id);
            }
        }
    }
    async createRecipeNutritionData(recipe, data) {
        const nutrition = await (0, nutrition_1.recipeNutrition)({
            name: data.name,
            ingr: (0, helpers_1.scaleRecipe)(recipe.serving, 1, recipe.ingredients).map((i) => {
                return `${parseFloat(i.amount || "0") <= 0
                    ? ""
                    : Math.floor(parseFloat(i.amount)) == 0
                        ? (0, helpers_1.fractionConverter)(parseFloat(i.amount)) + " "
                        : i.amount + " "}${i.unit ? i.unit + " " : ""}${i.ingredients}`;
            }),
        });
        console.log("nutrition : ", nutrition);
        if (!data)
            return;
        for (let dlabel of nutrition.data.dietLabels) {
            const dietLabel = new Nutrition_1.RecipeDietLabel();
            dietLabel.label = dlabel;
            dietLabel.recipe = recipe;
            await dietLabel.save();
        }
        for (let hlabel of nutrition.data.healthLabels) {
            const healthLabel = new Nutrition_1.RecipeHealthLabel();
            healthLabel.label = hlabel;
            healthLabel.recipe = recipe;
            await healthLabel.save();
        }
        const totalNutrientsData = nutrition.data.totalNutrients;
        for (let tnutrition of Object.keys(totalNutrientsData)) {
            const totalNutrients = new Nutrition_1.RecipeTotalNutrition();
            totalNutrients.recipe = recipe;
            totalNutrients.label = totalNutrientsData[tnutrition].label;
            totalNutrients.quantity = totalNutrientsData[tnutrition].quantity;
            totalNutrients.unit = totalNutrientsData[tnutrition].unit;
            totalNutrients.code = tnutrition;
            await totalNutrients.save();
        }
        const totalDailyData = nutrition.data.totalDaily;
        for (let tdaily of Object.keys(totalDailyData)) {
            const totalDaily = new Nutrition_1.RecipeTotalDaily();
            totalDaily.recipe = recipe;
            totalDaily.label = totalDailyData[tdaily].label;
            totalDaily.quantity = totalDailyData[tdaily].quantity;
            totalDaily.unit = totalDailyData[tdaily].unit;
            totalDaily.code = tdaily;
            await totalDaily.save();
        }
        const totalNutrientKcalData = nutrition.data.totalNutrientsKCal;
        for (let tnutrKcal of Object.keys(totalNutrientKcalData)) {
            const totalNutritionKcal = new Nutrition_1.RecipeTotalNutritionKcal();
            totalNutritionKcal.recipe = recipe;
            totalNutritionKcal.label = totalNutrientKcalData[tnutrKcal].label;
            totalNutritionKcal.quantity = totalNutrientKcalData[tnutrKcal].quantity;
            totalNutritionKcal.unit = totalNutrientKcalData[tnutrKcal].unit;
            totalNutritionKcal.code = tnutrKcal;
            await totalNutritionKcal.save();
        }
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isAdminAuth),
    (0, type_graphql_1.Mutation)(() => responses_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("data", () => [recipes_1.CreateBulkRecipesInput])),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], CreateRecipeResolver.prototype, "createBulkRecipes", null);
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