import { Request, Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { AppDataSource } from "../../config/database";
import { User } from "../../entities/User";


export class UserController {


  private static userRepository =
    AppDataSource.getRepository(User);



  /**
   * Get all users
   */
  static getUsers = async (
    req: Request,
    res: Response
  ): Promise<Response> => {

    try {

      const users =
        await this.userRepository.find({
          select: {
            id: true,
            username: true,
            email: true,
            createdAt: true,
            updatedAt: true
          }
        });



      return res.status(200).json({
        success: true,
        data: users
      });



    } catch (error) {

      console.error(error);


      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });

    }

  };





  /**
   * Get logged in user profile
   */
  static getProfile = async (
    req: AuthRequest,
    res: Response
  ): Promise<Response> => {

    try {


      if (!req.user) {

        return res.status(401).json({
          success: false,
          message: "Unauthorized"
        });

      }




      const user =
        await this.userRepository.findOne({

          where: {
            id: req.user.id
          },

          select: {
            id: true,
            username: true,
            email: true,
            createdAt: true,
            updatedAt: true
          }

        });




      if (!user) {

        return res.status(404).json({
          success: false,
          message: "User not found"
        });

      }




      return res.status(200).json({

        success: true,

        data: user

      });




    } catch (error) {


      console.error(error);



      return res.status(500).json({

        success: false,

        message: "Internal server error"

      });


    }

  };


}