import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://finyoursdb_owner:HT3RE6byoBuw@ep-dry-king-a5ppgc96.us-east-2.aws.neon.tech/finyoursdb?sslmode=require"
);
export const db = drizzle(sql, { schema });
