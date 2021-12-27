import { ConnectionOptions, createConnection } from "typeorm";
import { Photo } from "./entity/photo.entity";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname + "../.env") });

export const connectDB = async () => {
  const options: ConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "me",
    password: process.env.DEV_DB_PASSWORD,
    database: "photo_gallery",
    entities: [Photo],
    synchronize: true,
    ssl: true,
  };

  if (process.env.NODE_ENV === "production") {
    Object.assign(options, { url: process.env.DATABASE_URL });
  }

  await createConnection(options);
};
