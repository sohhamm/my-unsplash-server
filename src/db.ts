import { createConnection } from "typeorm";

export const connectDB = async () => {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "me",
    password: process.env.DEV_DB_PASSWORD,
    database: "photo_gallery",
  });
};
