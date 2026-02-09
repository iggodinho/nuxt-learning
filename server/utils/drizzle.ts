import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from '../db/schema';

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const dbPath = process.env.DATABASE_URL!

const sqlite = new Database(dbPath);
const db = drizzle(sqlite, { schema });

export function useDrizzle(){
    return db
};

export type Food = typeof schema.foodsTable.$inferSelect;