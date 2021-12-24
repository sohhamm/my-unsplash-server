import express from "express";
import {
  addPhoto,
  deletePhoto,
  getAllPhotos,
} from "../controllers/photo.controller";

const router = express.Router();

// get initial photo list

router.route("/").get(getAllPhotos).post(addPhoto);

router.route("/:id").delete(deletePhoto);

export { router };
