import AppHeader from "../components/common/AppHeader"
// import SideBar from "../components/common/SideBar"

import { Outlet, Link, useLoaderData } from "react-router-dom"
import { getProjects } from "../services/projects"

export async function loader() {
    const projects = await getProjects()
    return { projects }
}

const Dashboard = () => {
    const { projects } = useLoaderData();
    // console.log(projects);

    return (
        <>
            <AppHeader />
            {/* <SideBar /> */}
            <div id="sidebar">
                <h1>Projects</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                        id="q"
                        aria-label="Search contacts"
                        placeholder="Search"
                        type="search"
                        name="q"
                        />
                        <div
                        id="search-spinner"
                        aria-hidden
                        hidden={true}
                        />
                        <div
                        className="sr-only"
                        aria-live="polite"
                        ></div>
                    </form>
                    {/* <form method="post">
                        <button type="submit">New</button>
                    </form> */}
                </div>

                <nav>
                    {projects.length ? (
                        <ul>
                            {projects.map(project => (
                                <li key={project.id}>
                                    <Link to={`/project/${project.id}`}>
                                        {project.name ? (
                                        <>
                                            {project.name}
                                        </>
                                        ) : (
                                        <i>Undefined Project</i>
                                        )}{" "}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                    <p>
                        <i>No projects</i>
                    </p>
                )}
                </nav>

                {/* other elements */}
            </div>
            <Outlet />
        </>
        
    )
}

export default Dashboard