import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma";


export class AuthService {


  static async signup(
    username: string,
    email: string,
    password: string
  ) {

    const existUser = await prisma.user.findUnique({
      where: {
        email
      }
    });


    if (existUser) {
      throw new Error("Email already exists");
    }


    const hashedPassword = await bcrypt.hash(
      password,
      10
    );


    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    });


    return {
      id: user.id,
      username: user.username,
      email: user.email
    };

  }



  static async signin(
    email: string,
    password: string
  ) {


    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });


    if (!user) {
      throw new Error("Invalid email or password");
    }



    const checkPassword = await bcrypt.compare(
      password,
      user.password
    );


    if (!checkPassword) {
      throw new Error("Invalid email or password");
    }



    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1d"
      }
    );



    return {
      accessToken,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    };

  }


}