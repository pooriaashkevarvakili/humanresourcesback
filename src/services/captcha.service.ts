import axios from "axios";

export class CaptchaService {

  static async verify(
    token: string
  ): Promise<boolean> {

    const secretKey = process.env.CAPTCHA_SECRET_KEY!;


    const { data } = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );


    if (!data.success) {
      throw new Error("Invalid captcha");
    }


    return true;
  }

}