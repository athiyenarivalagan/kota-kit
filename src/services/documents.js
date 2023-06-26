import axios from 'axios'

export const getDocuments = async (backendRouteCategory) => {
    const baseUrl = `/api/${backendRouteCategory}`
    const res = await axios.get(baseUrl)
    return res.data
}

export const newRecordInDb = async (backendRouteCategory, recordData) => {
    const baseUrl = `/api/${backendRouteCategory}`
    const res = await axios.post(baseUrl, recordData)
    return res
}