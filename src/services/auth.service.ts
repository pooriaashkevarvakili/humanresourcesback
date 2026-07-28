import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../config/database";
import { User } from "../entities/User";

export class AuthService {
  private static userRepository =
    AppDataSource.getRepository(User);

  static async signup(
    username: string,
    email: string,
    password: string
  ) {
    const existUser = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    if (existUser) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.userRepository.create({
      username,
      email,
      password: hashedPassword,
    });

    await this.userRepository.save(user);

    return {
      id: user.id,
      username: user.username,
      email: user.email,
    };
  }

  static async signin(
    email: string,
    password: string
  ) {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
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

    const JWT_SECRET = "change-this-to-a-strong-secret";

    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return {
      accessToken,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    };
  }
}