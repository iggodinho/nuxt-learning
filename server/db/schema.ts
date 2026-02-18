import { int, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const foodsTable = sqliteTable("foods",{
    id: int().primaryKey({autoIncrement: true}),
    name: text().notNull(),
}) 

export const usersTable = sqliteTable("users",{
    id: int().primaryKey({autoIncrement: true}),
    username: text().notNull(),
    password: text().notNull(),
})