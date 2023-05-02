import AppHeader from "../components/common/AppHeader"
import SideBar from "../components/common/SideBar"
import { Outlet, useLoaderData, Link } from "react-router-dom"


const Dashboard = () => {
    const projects = useLoaderData()
    return (
        <>
            <AppHeader />
            <SideBar />
            <Link to={`/project/1`}>Project 1 </Link>
            <Outlet />
            <div>THIS IS THE USER DASHBOARD PAGE</div>
        </>
        
    )
}

export default Dashboard