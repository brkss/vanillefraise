"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_recipe = void 0;
const Recipe_1 = require("../../../entity/Recipe");
const Nutrition_1 = require("../../../entity/Nutrition");
const index_1 = require("./index");
const donwloadImage_1 = require("../donwloadImage");
const create_recipe = async (url, cats) => {
    let recipe = await Recipe_1.Recipe.findOne({ where: { url: url } });
    if (recipe)
        return {
            success: false,
            message: "Recipe Already exist !",
        };
    const data = await (0, index_1.get_recipe)(url);
    console.log("Starting creating recipe !");
    if (!data)
        return {
            success: false,
            message: "Invalid Data !",
        };
    const categories = await get_categories(cats);
    if (categories.length === 0)
        return {
            success: false,
            message: "invalid category",
        };
    try {
        recipe = new Recipe_1.Recipe();
        recipe.name = data.title;
        recipe.total = data.time.toString();
        recipe.categories = categories;
        recipe.url = url;
        recipe.description = "none";
        recipe.image = await download_recipe_image(data.image, data.title);
        recipe.serving = parseInt(data.yields);
        await recipe.save();
        await create_recipe_ingredients(recipe, data.ingredients).catch((e) => {
            console.log("error creating ingredients : ", e);
        });
        await create_recipe_instructions(recipe, data.instructions).catch((e) => {
            console.log("results creating instructions : ", e);
        });
        await create_recipe_nutrition(recipe, data.nutrition).catch((e) => {
            console.log("error creating nutritions : ", e);
        });
        return {
            success: true,
            recipe: recipe,
        };
    }
    catch (e) {
        console.log("Something went wrong creating recipe !");
        return {
            success: false,
            message: "Something went wrong !",
        };
    }
};
exports.create_recipe = create_recipe;
const create_recipe_instructions = async (recipe, instructions) => {
    let index = 1;
    for (let instruction of instructions) {
        const inst = new Recipe_1.Instruction();
        inst.recipe = recipe;
        inst.raw = instruction;
        inst.index = index;
        index++;
        await inst.save();
    }
    return true;
};
const create_recipe_ingredients = async (recipe, ingredients) => {
    for (let ingredient of ingredients) {
        const ing = new Recipe_1.Ingredient();
        ing.recipe = recipe;
        ing.raw = ingredient.raw;
        ing.unit = ingredient.unit;
        ing.amount = ingredient.qty;
        ing.ingredients = ingredient.name;
        await ing.save();
    }
    return true;
};
const get_categories = async (ids) => {
    const categories = [];
    for (let id of ids) {
        const category = await Recipe_1.RecipeCategory.findOne({ where: { id: id } });
        if (!category)
            return [];
        categories.push(category);
    }
    return categories;
};
const download_recipe_image = async (img_url, title) => {
    const img = `${title.split(" ").join("_")}_${new Date().getTime()}.jpg`;
    await (0, donwloadImage_1.downloadImage)(img_url, `../../cdn/images/${img}`);
    return img;
};
const create_recipe_nutrition = async (recipe, nutrition) => {
    const servings = recipe.serving || 1;
    for (let label in nutrition.dietLabels) {
        const dietLabel = new Nutrition_1.RecipeDietLabel();
        dietLabel.label = label;
        dietLabel.recipe = recipe;
        await dietLabel.save();
    }
    for (let hl of nutrition.healthLabels) {
        const healthLabel = new Nutrition_1.RecipeHealthLabel();
        healthLabel.label = hl;
        healthLabel.recipe = recipe;
        await healthLabel.save();
    }
    const totalNutrientsData = nutrition.totalNutrients;
    for (let tnutrition of Object.keys(totalNutrientsData)) {
        const totalNutrients = new Nutrition_1.RecipeTotalNutrition();
        totalNutrients.recipe = recipe;
        totalNutrients.label = totalNutrientsData[tnutrition].label;
        totalNutrients.quantity =
            totalNutrientsData[tnutrition].quantity / servings;
        totalNutrients.unit = totalNutrientsData[tnutrition].unit;
        totalNutrients.code = tnutrition;
        await totalNutrients.save();
    }
    const totalDailyData = nutrition.totalDaily;
    for (let tdaily of Object.keys(totalDailyData)) {
        const totalDaily = new Nutrition_1.RecipeTotalDaily();
        totalDaily.recipe = recipe;
        totalDaily.label = totalDailyData[tdaily].label;
        totalDaily.quantity = totalDailyData[tdaily].quantity / servings;
        totalDaily.unit = totalDailyData[tdaily].unit;
        totalDaily.code = tdaily;
        await totalDaily.save();
    }
    const totalNutrientKcalData = nutrition.totalNutrientsKCal;
    for (let tnutrKcal of Object.keys(totalNutrientKcalData)) {
        const totalNutritionKcal = new Nutrition_1.RecipeTotalNutritionKcal();
        totalNutritionKcal.recipe = recipe;
        totalNutritionKcal.label = totalNutrientKcalData[tnutrKcal].label;
        totalNutritionKcal.quantity =
            totalNutrientKcalData[tnutrKcal].quantity / servings;
        totalNutritionKcal.unit = totalNutrientKcalData[tnutrKcal].unit;
        totalNutritionKcal.code = tnutrKcal;
        await totalNutritionKcal.save();
    }
    return true;
};
//# sourceMappingURL=create.js.map