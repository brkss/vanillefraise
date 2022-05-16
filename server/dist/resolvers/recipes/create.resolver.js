"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRecipeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const recipes_parser_1 = __importDefault(require("recipes-parser"));
const recipeScraper = require("recipe-scraper");
const path = __importStar(require("path"));
const fs_1 = __importDefault(require("fs"));
const donwloadImage_1 = require("../../utils/helpers/donwloadImage");
const Recipe_1 = require("../../entity/Recipe");
const responses_1 = require("../../utils/responses");
const createrecipe_input_1 = require("../../utils/inputs/recipes/createrecipe.input");
const nutrition_1 = require("../../utils/nutrition");
const Nutrition_1 = require("../../entity/Nutrition");
const units_json_1 = __importDefault(require("recipes-parser/lib/nlp/en/units.json"));
const global_unit_json_1 = __importDefault(require("recipes-parser/lib/nlp/en/global_unit.json"));
const rules = fs_1.default.readFileSync(path.join(__dirname, `../../../node_modules/recipes-parser/lib/nlp/en/en/rules.pegjs`), {
    encoding: "utf8",
});
let CreateRecipeResolver = class CreateRecipeResolver {
    async createRecipe(data) {
        if (!data.url || data.categories.length == 0)
            return {
                message: "Invalid URl",
                status: false,
            };
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
            const img = `${recipe_data.name
                .split(" ")
                .join("_")}_${new Date().getTime()}.jpg`;
            const dir = path.join(__dirname, `../../cdn/images/${img}`);
            console.log("OPTIMIZE IMAGE !");
            await (0, donwloadImage_1.downloadImage)(recipe_data.image, `../../cdn/images/${img}`);
            const recipe = new Recipe_1.Recipe();
            recipe.name = recipe_data.name;
            recipe.image = img;
            recipe.description = recipe_data.description;
            recipe.prep = recipe_data.time.prep;
            recipe.cook = recipe_data.time.cook;
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
            await this.createRecipeNutritionData(recipe, {
                name: recipe_data.name,
                ingr: recipe_data.ingredients,
            });
            await this.createRecipeIngredients(recipe, recipe_data.ingredients);
            await this.createRecipeInstructions(recipe, recipe_data.instructions);
            return {
                status: true,
                message: "Recipe created successfuly ! ",
                recipe: recipe,
            };
        }
        catch (e) {
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
        var _a, _b, _c;
        const parser = new recipes_parser_1.default(rules, units_json_1.default, global_unit_json_1.default);
        for (let ing of ings) {
            if (ing.length > 0) {
                const ingredient_parsed = parser.getIngredientsFromText([ing], false);
                const ingredient = new Recipe_1.Ingredient();
                ingredient.raw = ing;
                ingredient.unit =
                    String((_a = ingredient_parsed[0].result) === null || _a === void 0 ? void 0 : _a.unit) || undefined;
                ingredient.amount =
                    Number((_b = ingredient_parsed[0].result) === null || _b === void 0 ? void 0 : _b.amount) || undefined;
                ingredient.ingredients = (_c = ingredient_parsed[0].result) === null || _c === void 0 ? void 0 : _c.ingredient;
                ingredient.recipe = recipe;
                await ingredient.save();
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
            }
        }
    }
    async createRecipeNutritionData(recipe, data) {
        const nutrition = await (0, nutrition_1.recipeNutrition)(data);
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