"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fix_recipe_ingredients = void 0;
const Recipe_1 = require("../../../entity/Recipe");
const recipe_1 = require("../../helpers/recipe");
const sanitize_recipe = async (recipe) => {
    console.log(`[${recipe.name}] \t START`);
    let failed = false;
    const data = await (0, recipe_1.get_recipe)(recipe.url).catch((_) => {
        failed = true;
    });
    console.log(`[${recipe.name}] \t GOT THE DATA`);
    if (!data || failed) {
        console.log(`[${recipe.name}] : FAILED 📛`);
        return -1;
    }
    if (data.nutrition.error) {
        return -1;
    }
    recipe.ingredients = [];
    await recipe.save();
    if (recipe)
        for (let ing of data.nutrition.ingredients) {
            const ingredient = new Recipe_1.Ingredient();
            ingredient.raw = ing.text;
            ingredient.amount = ing.parsed[0].quantity;
            ingredient.unit = ing.parsed[0].measure;
            ingredient.ingredients = ing.parsed[0].foodMatch;
            ingredient.recipe = recipe;
            await ingredient.save();
        }
    console.log(`[${recipe.name}] : ✅ DONE`);
    console.log(`-- -- -- -- -- -- -- -- -- -- -- -- -- --`);
    return 1;
};
const fix_recipe_ingredients = async () => {
    const recipes = await Recipe_1.Recipe.find({ relations: ["ingredients"] });
    if (recipes.length === 0)
        return false;
    const recipes_promises = [];
    for (let recipe of recipes) {
        recipes_promises.push(sanitize_recipe(recipe));
    }
    await Promise.all(recipes_promises).then((values) => {
        console.log("promices results : ", values);
    });
    return true;
};
exports.fix_recipe_ingredients = fix_recipe_ingredients;
//# sourceMappingURL=fix_recipes_ingredients.js.map