import { Request, Response } from "express";
import path from "path";

export const getImageHumanresources = (
  req: Request,
  res: Response
) => {
  const imagePath = path.join(
    process.cwd(),
    "src",
    "public",
    "humanresources.png"
  );

  return res.sendFile(imagePath);
};