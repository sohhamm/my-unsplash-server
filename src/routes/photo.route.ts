import express from "express";
import { addPhoto, getAllPhotos } from "../controllers/photo.controller";

const router = express.Router();

// get initial photo list

router.route("/").get(getAllPhotos).post(addPhoto);

router.route("/:label").get().put().delete();

export { router };
