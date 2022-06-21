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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranlatingResolver = void 0;
const type_graphql_1 = require("type-graphql");
const axios_1 = __importDefault(require("axios"));
const Translated_1 = require("../../entity/Translate/Translated");
const refrence_1 = require("../../utils/data/translate/refrence");
const responses_1 = require("../../utils/responses");
let TranlatingResolver = class TranlatingResolver {
    async languages() {
        return [
            {
                name: "English",
                id: "en",
            },
            {
                name: "French",
                id: "fr",
            },
            {
                name: "Arabic",
                id: "ar",
            },
            {
                name: "Spanish",
                id: "es",
            },
        ];
    }
    async translateAll(txt, type, pointer) {
        for (let lang of refrence_1.target_languages) {
            await this.translate(txt, type, lang, pointer);
        }
    }
    async translate(txt, type, target, pointer) {
        try {
            const res = await (0, axios_1.default)({
                method: "POST",
                url: "https://translate.argosopentech.com/translate",
                data: new URLSearchParams({
                    q: txt,
                    source: "en",
                    target: target,
                }),
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            });
            if (res.status !== 200 || !res.data.translatedText)
                return false;
            const translated = new Translated_1.Translated();
            translated.type = type;
            translated.txt = res.data.translatedText;
            translated.lang = target;
            translated.pointer = pointer;
            await translated.save();
        }
        catch (e) {
            console.log("Something went wrong translating : ", e);
            return false;
        }
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [responses_1.LanguagesResponse]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TranlatingResolver.prototype, "languages", null);
TranlatingResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], TranlatingResolver);
exports.TranlatingResolver = TranlatingResolver;
//# sourceMappingURL=translate.resolver.js.map