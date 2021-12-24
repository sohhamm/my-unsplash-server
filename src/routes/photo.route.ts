import express, { Request, Response } from "express";
import { items } from "../constants/index";
import { addPhoto, getAllPhotos } from "../controllers/photo.controller";

const router = express.Router();

// get initial photo list

router.route("/").get(getAllPhotos).post(addPhoto);

router.route("/:id").get().put().delete();

export { router };
