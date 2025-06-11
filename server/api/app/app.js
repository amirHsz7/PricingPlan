export default defineEventHandler(async (event) => {
    try {
        let data = await $fetch(`https://dummyjson.com/c/d639-e47c-482a-8e34`, {
            method: 'GET'
        })
        
        return data
    } catch (error) {
        return error
    }
})
