import { Pool } from "pg";

async function Pool() {
  const pool = new Pool(creds);
  const now = pool.query("SELECT NOW()");
  return now;
}
