import { foodsTable } from "../db/schema";
import { useDrizzle } from "../utils/drizzle";

export default defineEventHandler(async (event)=>{

    const foods = 
    useDrizzle().
    select().
    from(foodsTable).
    all();
    //await new Promise(resolve => setTimeout(resolve, 3000))
    return {
        foods
    }
});