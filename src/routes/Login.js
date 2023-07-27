import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const Login = () => {
    let auth = useAuth()
    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [invalidLogin, setInvalidLogin] = useState(false)
    
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await auth.login({email,password}, () => {
                setTimeout(navigate, 0, "/project")
            })
        }
        catch (err) {
            setInvalidLogin(true)
            setTimeout(() => setInvalidLogin(false), 2500)
        }
    }
    return(
        <>
        <div className="bg-slate-100 h-screen absolute w-screen">
            <div className=" w-96 m-auto my-96 bg-white rounded p-8">
                <form className="flex flex-col gap-2 items-center" onSubmit={handleSubmit}>
                    <h2 className="text-3xl mb-8 font-bold">Login</h2>
                    <Input placeholder={'Email'} name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder={'Password'} type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {invalidLogin ? <div className="text-red-500 self-start">*Invalid login credentials</div> : null}
                    <Button text="Login"/>
                </form>
            </div>
        </div>
            
        </>
    )
}

export default Login

const Input = ({ name, placeholder, type, value, onChange }) => <input type={type} value={value} onChange={onChange} name={name} placeholder={placeholder} className='bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
const Button = ({ text}) => <button className="py-2 px-5 w-full text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type='submit' >{text}</button>