import { Response, Request } from "express";

export const getAllPhotos = (_req: Request, res: Response) => {
  //if no photos in db then send random urls

  res.json({ name: "soham" });
};

export const addPhoto = (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  res.json({ status: "success" });
};
