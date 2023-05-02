import { useLoaderData } from 'react-router-dom'

export async function loader({ params }) {
    return params.projectId;
}
const Project = () => {
    const projects = useLoaderData()
    console.log(projects)
    return (
        <div>This is the Project {projects}</div>
    )
}

export default Project