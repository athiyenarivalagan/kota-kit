import { useState } from "react"
import loginService from "../services/login"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const user = await loginService.login({
                email,
                password
            })
            window.localStorage.setItem(
                'user', JSON.stringify(user)
            )
            navigate('/project')
        }
        catch (err) {
            console.log(err)
        }

    }
    return(
        <>
            <form className="flex flex-col gap-2 w-64" onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input className="border-2" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Password:</label>
                <input className="border-2" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Login

//OnSubmit, I'll want to send a POST request to api/login 
//And then 