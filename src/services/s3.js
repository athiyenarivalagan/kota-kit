import axios from "axios"
const token = JSON.parse(localStorage.getItem('user'))?.token 

export const uploadToS3 = async (formData) => {
    try {
        const res = await axios.post(`/api/s3/upload`, formData, {
            headers: {
                Authorization:`Bearer ${token}`
            }
          })
        if (res.status !== 200) {
            return Error(`Problems uploading data to S3.`)
        }
        return res 
    } catch (error) {
        return error
    }
}