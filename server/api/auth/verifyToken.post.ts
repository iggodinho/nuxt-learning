import jwt from "jsonwebtoken";
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { token } = body; 
    if (!token) {
        throw createError({
            statusCode: 400,    
            message: "Token is required",
        });
    }
    const user = jwt.verify(token, process.env.JWT_SECRET!) as any;
    if (user) {
        return { success: true, message: "Token is valid",
            user
         };
    }
    throw createError({
        statusCode: 401,
        message: "An error occurred while verifying the token",
    }); 
})