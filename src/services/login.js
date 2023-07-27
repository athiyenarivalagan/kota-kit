import axios from "axios"
const baseUrl = '/api/login'

const login = async credentials => {
    try {
        const res = await axios.post(baseUrl, credentials)
        return res.data
    } catch (e) {
        throw e
    }
    
    //So here, res could either return a 200 with everything within data, or it could 
    //return 401. I'll need to catch a 401
    
    
}

export default { login }