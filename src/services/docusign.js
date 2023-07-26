import axios from "axios"
let token 



export const checkDocusignStatus = async (envelopeId) => {
    token = JSON.parse(localStorage.getItem('user'))?.token 
    try {
        const res = await axios.get(`/api/docusign/checkEnvelopeStatus/${envelopeId}`, {
            headers: {
                Authorization:`Bearer ${token}`
            }
          })
        if (res.status !== 200) {
            Error(`Problems fetching docusign status for envelope: ${envelopeId}`)
        }
        if (res.data.status === "completed" || res.data.status === "signed") {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
}

export const updateDbToSigned = async (backendRouteCategory, documentId) => {
    token = JSON.parse(localStorage.getItem('user'))?.token 
    try {
        const fieldToUpdate = {
            isSigned: true
        }
        const res = await axios.patch(`/api/${backendRouteCategory}/${documentId}`, fieldToUpdate, {
            headers: {
                Authorization:`Bearer ${token}`
            }
          })
        if (res.status === 200) {
            console.log(`isSigned field for ${backendRouteCategory} document ${documentId} set to true.`)
            return res.data
        }

    } catch (error) {
        console.log(`Error in changing isSigned field for ${backendRouteCategory} document ${documentId} to true`)
    }
}

export const sendViaDocusign = async (dataToSend) => {
    token = JSON.parse(localStorage.getItem('user'))?.token 
    try {
        const res = await axios.post('/api/docusign/sendViaDocusign', dataToSend, {
            headers: {
                Authorization:`Bearer ${token}`
            }
          })
        if (res.status !== 200) {
            Error(`Problems sending email to client via Docusign.`)
        }
        return res 
    } catch(error) {
        console.log(error)
    }
}