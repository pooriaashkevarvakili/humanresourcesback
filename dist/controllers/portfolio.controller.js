"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageHumanresources = void 0;
const path_1 = __importDefault(require("path"));
const getImageHumanresources = (req, res) => {
    const imagePath = path_1.default.join(process.cwd(), "src", "public", "humanresources.png");
    return res.sendFile(imagePath);
};
exports.getImageHumanresources = getImageHumanresources;
