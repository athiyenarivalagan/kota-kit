import { Link, Outlet, useNavigation } from "react-router-dom"

const Main = () => {
    const navigation = useNavigation()
    return (
        <>
            <div className='flex justify-center items-center mt-8'>
                {/* <div>
                    <a href='/' className='text-3xl'>KOTAKIT</a>
                </div> */}

                <Link  
                    className='text-3xl'
                    to={'/'}
                >
                    KOTAKIT
                </Link>
            </div>

            <ul className="flex justify-around items-center flex-wrap p-4 border border-black my-10">
                <li className="mr-3">
                    {/* <a 
                        className="text-black text-xl font-semibold" 
                        href="/About">ABOUT
                    </a> */}
                    
                    <Link 
                        className="text-black text-xl font-semibold" 
                        to={'/About'}
                        >
                            ABOUT
                    </Link>

                </li>
                <li className="mr-3">
                    <a 
                        className="text-black text-xl font-semibold" 
                        href="/Services">SERVICES
                    </a>
                </li>
                <li className="mr-3">
                    <a 
                        className="text-black text-xl font-semibold" 
                        href="/">HOW</a>
                </li>
                <li className="mr-3">
                    <a 
                        className="text-glack text-xl font-semibold" 
                        href="/project">DESIGN NOW</a>
                </li>
            </ul>
            <div
                id="detail"
                className={
                    navigation.state === "loading" ? "loading" : ""
                }
                >
                <Outlet />
            </div>
        </>
    )
}

export default Main