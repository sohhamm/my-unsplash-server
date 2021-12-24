import { Response, Request } from "express";
import { items } from "../constants";
import { Photo } from "../entity/photo.entity";

export const getAllPhotos = async (_req: Request, res: Response) => {
  try {
    //if no photos in db then send random urls

    const photos = await Photo.find();

    if (!photos.length) {
      return res.json(items);
    }

    return res.json([...photos, ...items]);
  } catch (err) {
    res.status(400).json({ err });
  }
};

export const addPhoto = (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  res.json({ status: "success" });
};
