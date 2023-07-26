import axios from 'axios'
let token

export const getDocuments = async (backendRouteCategory) => {
    
    token = JSON.parse(localStorage.getItem('user'))?.token 
    const baseUrl = `/api/${backendRouteCategory}`
    const res = await axios.get(baseUrl, {
        headers: {
            Authorization:`Bearer ${token}`
        }
      })
    return res.data
}

export const newRecordInDb = async (backendRouteCategory, recordData) => {
    token = JSON.parse(localStorage.getItem('user'))?.token 
    const baseUrl = `/api/${backendRouteCategory}`
    const res = await axios.post(baseUrl, recordData, {
        headers: {
            Authorization:`Bearer ${token}`
        }
      })
    return res
}