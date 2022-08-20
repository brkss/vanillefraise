"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_recipe = void 0;
const Recipe_1 = require("../../../entity/Recipe");
const index_1 = require("./index");
const donwloadImage_1 = require("../donwloadImage");
const create_recipe = async (url, cats) => {
    const data = await (0, index_1.get_recipe)(url);
    if (!data)
        return null;
    const categories = await get_categories(cats);
    if (categories.length === 0)
        return null;
    if (await Recipe_1.Recipe.findOne({ where: { url: url } }))
        return null;
    const recipe = new Recipe_1.Recipe();
    recipe.name = data.title;
    recipe.total = data.time.toString();
    recipe.categories = categories;
    recipe.url = url;
    recipe.description = "none";
    recipe.image = await download_recipe_image(data.image, data.title);
    recipe.serving = 0;
    await recipe.save();
    await create_recipe_ingredients(recipe, data.ingredients);
    await create_recipe_instructions(recipe, data.instructions);
};
exports.create_recipe = create_recipe;
const create_recipe_instructions = async (recipe, instructions) => {
    for (let instruction of instructions) {
        const inst = new Recipe_1.Instruction();
        inst.recipe = recipe;
        inst.raw = instruction;
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
        ing.amount = ingredient.quantity;
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
//# sourceMappingURL=create.js.map