import { int, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const foodsTable = sqliteTable("foods",{
    id: int().primaryKey({autoIncrement: true}),
    name: text().notNull(),
}) 