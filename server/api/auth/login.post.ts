import {hash, compare} from "bcrypt-ts";
import {eq} from "drizzle-orm";
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
    const db = useDrizzle();
    const user = db
    .select()
    .from(usersTable)
    .where(eq(usersTable.username, username))
    .limit(1)
    .get();

    if (!user) {
        throw createError({
            statusCode: 404,
            message: "user not found",
        });
    }

    if (!await compare(password, user.password)) {
        throw createError({
            statusCode: 401,
            message: "Invalid password",
        });
    }

    return {success: true, message: "Login successful"};
})