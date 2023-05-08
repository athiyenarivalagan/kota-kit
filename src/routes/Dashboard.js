import { Outlet, useLoaderData } from "react-router-dom"
import { getProjects } from "../services/projects"

import AppHeader from "../components/common/AppHeader"
import SideBar from "../components/common/SideBar"
// import Footer from "../components/common/Footer"

export async function loader() {
    const projects = await getProjects()
    return { projects }
}

const Dashboard = () => {
    const { projects } = useLoaderData()

    return (
        <>
            <AppHeader />
            <SideBar projects={projects}/>
            {/* <Footer /> */}
            <Outlet />
        </>
    )
}

export default Dashboard