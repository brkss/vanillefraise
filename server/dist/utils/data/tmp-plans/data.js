"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const skin_1 = require("./skin");
const hair_1 = require("./hair");
const brain_1 = require("./brain");
exports.data = [
    {
        id: "p-5",
        title: "Healthy Brain",
        description: "",
        image: "plans/energy.png",
        nutrients: brain_1.brain_nutritients_data,
    },
    {
        title: "Healthy Skin",
        description: "",
        id: "p-1",
        image: "plans/skin.png",
        nutrients: skin_1.skin_nutrients_data,
    },
    {
        id: "p-2",
        title: "Healthy Hair",
        description: "",
        image: "plans/hair.jpeg",
        nutrients: hair_1.hair_nutrients_data,
    },
];
//# sourceMappingURL=data.js.map