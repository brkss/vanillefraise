"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const raw = '[{"name":"Cycling, mountain bike, bmx","a":502,"b":598,"c":695,"d":791},{"name":"Stretching, hatha yoga","a":236,"b":281,"c":327,"d":372},{"name":"Basketball game, competitive","a":472,"b":563,"c":654,"d":745},{"name":"Martial arts, judo, karate, jujitsu","a":590,"b":704,"c":817,"d":931},{"name":"Martial arts, kick boxing","a":590,"b":704,"c":817,"d":931},{"name":"Playing tennis","a":413,"b":493,"c":572,"d":651},{"name":"Swimming synchronized","a":472,"b":563,"c":654,"d":745},{"name":"Walk / run, playing with animals","a":236,"b":281,"c":327,"d":372}]';
const data = JSON.parse(raw);
const getCategory = (name, cats) => {
    for (let c of cats) {
        if (name.toLowerCase().includes(c.name.toLowerCase())) {
            return c.id;
        }
    }
    return null;
};
const getData = (cats) => {
    const result = [];
    for (let d of data) {
        const r = [
            {
                name: d["name"],
                zone: 58,
                val: d["a"],
                category: getCategory(d.name, cats)
            },
            {
                name: d["name"],
                zone: 70,
                val: d["b"],
                category: getCategory(d.name, cats)
            },
            {
                name: d["name"],
                zone: 80,
                val: d["c"],
                category: getCategory(d.name, cats)
            },
            {
                name: d["name"],
                zone: 90,
                val: d["d"],
                category: getCategory(d.name, cats)
            },
        ];
        result.push(...r);
    }
    console.log("RESULT => ", result);
    return result;
};
exports.getData = getData;
//# sourceMappingURL=calories.data.js.map