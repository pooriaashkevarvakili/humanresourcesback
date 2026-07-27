import axios from "axios";


export class CaptchaService {


  static async verify(
    token: string
  ): Promise<boolean> {


    const secretKey =
      "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";


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


    console.log(
      "Google Captcha Response:",
      data
    );


    if (!data.success) {

      throw new Error(
        `Invalid captcha: ${
          data["error-codes"]?.join(", ")
        }`
      );

    }


    return true;

  }

}