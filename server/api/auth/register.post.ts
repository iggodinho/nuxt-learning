import {hash} from "bcrypt-ts";
import { usersTable } from "../../db/schema";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { username, password } = body;       
    if (!username || !password) {
        throw createError({
            statusCode: 400,
            message: "Username and password are required",
        });
    }   
    const hashedPassword = await hash(password, 8);

    const db = useDrizzle();
    const insertResult = await db.insert(usersTable).values({
        username,
        password: hashedPassword,
    }).returning();
    return { insertResult };
})