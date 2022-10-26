"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
const random = (seed) => {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
};
exports.random = random;
//# sourceMappingURL=random.js.map