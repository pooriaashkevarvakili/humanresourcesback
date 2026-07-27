"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptchaService = void 0;
const axios_1 = __importDefault(require("axios"));
class CaptchaService {
    static async verify(token) {
        const secretKey = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
        const { data } = await axios_1.default.post("https://www.google.com/recaptcha/api/siteverify", null, {
            params: {
                secret: secretKey,
                response: token,
            },
        });
        console.log("Google Captcha Response:", data);
        if (!data.success) {
            throw new Error(`Invalid captcha: ${data["error-codes"]?.join(", ")}`);
        }
        return true;
    }
}
exports.CaptchaService = CaptchaService;
