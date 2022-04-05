"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadImage = void 0;
const fs_1 = __importDefault(require("fs"));
const axios_1 = __importDefault(require("axios"));
const path_1 = __importDefault(require("path"));
const downloadImage = async (url, dest) => {
    const dir = path_1.default.join(__dirname, dest);
    (0, axios_1.default)({
        url,
        responseType: "stream",
    }).then((response) => new Promise((resolve, reject) => {
        response.data
            .pipe(fs_1.default.createWriteStream(dir))
            .on("finish", () => resolve())
            .on("error", (e) => reject(e));
    }).catch((e) => {
        console.log("error => ", e);
    }));
};
exports.downloadImage = downloadImage;
//# sourceMappingURL=donwloadImage.js.map