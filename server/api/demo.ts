export default defineEventHandler(async (event) => {
    // handle query params
    const { name } = getQuery(event);

    // handle post request
    const { age } = await readBody(event);
    
    return {
        message: `Hello ${name}, You are ${age} years old.`
    }
});