import { useLoaderData } from "react-router-dom"
import { getProject } from "../services/projects"

export async function loader({ params }) {
    const project = await getProject(params.projectId)
    // return { project }
    return project
  }

const Project = () => {
    const project = useLoaderData()
    console.log(project)


    return (
        <div>
            <p>This is the page for Project {project.id}</p>
            <p>{project.name}</p>
            <p>{'['}{project.address}{']'}</p>
        </div>

    )
}

export default Project