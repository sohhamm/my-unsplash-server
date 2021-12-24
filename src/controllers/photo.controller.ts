import { Response, Request } from "express";
import { items } from "../constants";
import { Photo } from "../entity/photo.entity";

export const getAllPhotos = async (_req: Request, res: Response) => {
  try {
    const photos = await Photo.find();
    switch (true) {
      case !photos.length:
        return res.json(items);
      case photos.length < 10:
        return res.json([...photos, ...items]);
      default:
        return res.json(photos);
    }
  } catch (err) {
    res.status(400).json({ err });
  }
};

export const addPhoto = async (req: Request, res: Response) => {
  try {
    const { label, url } = req.body;
    if (!label) {
      res.status(400).json({ msg: "no label provided" });
    }
    if (!url) {
      res.status(400).json({ msg: "no url provided" });
    }
    const photo = new Photo();
    photo.label = label;
    photo.url = url;
    await photo.save();
    res.json({ status: "success", data: photo });
  } catch (err) {
    res.status(400).json({ err });
  }
};

export const deletePhoto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ msg: "no id provided to delete photo" });
    }
    const delPhoto = await Photo.findOne({ id });
    if (!delPhoto) {
      return res.status(400).json({ msg: "photo does not exist" });
    }
    await delPhoto.remove();
    return res.json({ msg: "successfully deleted" });
  } catch (err) {
    res.status(400).json({ err });
  }
};
