const getRequest = async (url, config = {}) => {
    const data = await useFetch(url, { ...config, method: 'GET' })
    return new Promise((resolve, reject) => {
        
        if (!data)
            reject(data)
        else
            resolve(data)
    })
}
// to get api from server api

const parseApiResponse = (response) => {
    if (response) {
        const data = response.data.value ? response.data.value : ''
        
        return { data }
    } else
        throw { isError: true, message: 'parse error' }
}
// return unnecessary nested data to flat data


export { getRequest, parseApiResponse}