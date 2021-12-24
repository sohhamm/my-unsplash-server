import { createConnection } from "typeorm";
import { Photo } from "./entity/photo.entity";

export const connectDB = async () => {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "me",
    password: process.env.DEV_DB_PASSWORD,
    database: "photo_gallery",
    entities: [Photo],
    synchronize: true,
  });
};
