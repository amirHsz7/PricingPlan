export default defineEventHandler(async (event) => {
    console.log('trying...');
    
    try {
        let data = await $fetch(`https://dummyjson.com/c/a56a-cf43-48c0-8b71`, {
            method: 'GET'
        })
        
        return data
    } catch (error) {
        console.log(error);
        
        return error
    }
})
