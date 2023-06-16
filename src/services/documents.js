import axios from 'axios'

export const getDocuments = async (backendRouteCategory) => {
    const baseUrl = `http://localhost:3001/api/${backendRouteCategory}`
    const res = await axios.get(baseUrl)
    return res.data
}

export const newRecordInDb = async (backendRouteCategory, recordData) => {
    const baseUrl = `http://localhost:3001/api/${backendRouteCategory}`
    const res = await axios.post(baseUrl, recordData)
    return res
}