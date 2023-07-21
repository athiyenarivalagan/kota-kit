import axios from 'axios'
const token = JSON.parse(localStorage.getItem('user'))?.token 

const auth = {
    headers: {
        Authorization:`Bearer ${token}`
    }
  }

export const getDocuments = async (backendRouteCategory) => {
    const baseUrl = `/api/${backendRouteCategory}`
    const res = await axios.get(baseUrl, auth)
    return res.data
}

export const newRecordInDb = async (backendRouteCategory, recordData) => {
    const baseUrl = `/api/${backendRouteCategory}`
    const res = await axios.post(baseUrl, recordData, auth)
    return res
}