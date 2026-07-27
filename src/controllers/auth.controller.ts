import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { CaptchaService } from "../services/captcha.service";


export class AuthController {


  static signup = async (
    req: Request,
    res: Response
  ): Promise<Response> => {

    try {

      const {
        username,
        email,
        password
      } = req.body;


      const user = await AuthService.signup(
        username,
        email,
        password
      );


      return res.status(201).json({

        success: true,
        message: "User created successfully",
        user

      });


    } catch (error: any) {

      console.error(error);


      return res.status(400).json({

        success: false,
        message: error.message

      });

    }

  };





  static signin = async (
    req: Request,
    res: Response
  ): Promise<Response> => {

    try {

      const {
        email,
        password,
        captchaToken
      } = req.body;


      console.log("Request Body:", req.body);
      console.log("Captcha Token:", captchaToken);


      if (!captchaToken) {

        return res.status(400).json({

          success: false,
          message: "Captcha token is required"

        });

      }


      // Verify checkbox captcha
      await CaptchaService.verify(
        captchaToken
      );


      const result = await AuthService.signin(
        email,
        password
      );


      res.cookie("accessToken", result.accessToken, {

        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000

      });


      return res.status(200).json({

        success: true,
        message: "Login successful",
        user: result.user

      });


    } catch (error: any) {

      console.error(error);


      return res.status(401).json({

        success: false,
        message: error.message

      });

    }

  };


}