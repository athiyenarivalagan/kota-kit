import { Link } from "react-router-dom"
import { useState } from "react"
import { useLoaderData, redirect } from "react-router-dom"
import { getProject } from "../services/projects"
import { Layout, Collapse, Divider, Space } from "antd"
import CustomCheckCircleIcon from "../components/CustomCheckCircleIcon"
import ProgressBar from '../components/ProgressBar'
import { formatProjectNumber } from '../utils/formatting'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { Form } from 'react-router-dom'
import { updateProject, deleteProject } from "../services/projects"


export async function loader({ params }) {
    const project = await getProject(params.projectId)
    return project
}

export async function action({ request, params }) {
    console.log("This si reached in action")
    switch (request.method) {
        case "POST": {
            const formData = await request.formData();
            const updates = Object.fromEntries(formData);
            console.log(updates)
            const newProject = await updateProject(params.projectId, updates)
            return null
        }
        case "DELETE": {
            console.log("THis si reached")
            await deleteProject(params.projectId)
            return redirect(`/project`)
        }
        default: {
            throw new Response("", { status: 405 });
        }
    }

  }

const ProjectOverview = () => {
    const project = useLoaderData()


    return (
        <div className="my-12 ">
            <Layout.Content className="layout-content ">
                <ProgressBar />
                <ProjectFields project={project}/>
                <hr className="w-2/3 m-auto text-xl my-8"/>
                
                <div className="flex flex-col w-2/3 m-auto">
                    <SectionHeader text={'Spatial Planning'} />
                    <SectionDropDown>
                        <Link to={`/project/${project.id}/spatial-layout`}>Spatial Layout</Link>
                        <Link to={`/project/${project.id}/furnishing-board`}>Furnishing</Link>
                        <Link to={`/project/${project.id}/appliances`}>Appliances</Link>
                        <Link to={`/project/${project.id}/electrical-plan`}>Electrical Plans</Link>
                    </SectionDropDown>

                    <SectionHeader text={'Concept Board & Materials'} />
                    <SectionDropDown>
                        <Link to={`/project/${project.id}/concept-board`}>Concept Board</Link>
                        <Link to={`/project/${project.id}/materials`}>Materials</Link>
                    </SectionDropDown>

                    <SectionHeader text={'Drawings'} />

                    <SectionDropDown>
                        <Link to={`/project/${project.id}/elevation-drawings`}>Elevation Drawings</Link>
                        <Link to={`/project/${project.id}/3d-renderings`}>3D Renderings</Link>
                    </SectionDropDown>
                </div>
            </Layout.Content>
        </div>
    )
}

export default ProjectOverview

const SectionHeader = ({ text }) => {

    return(
        <Divider orientation="left">
            <div className="flex gap-2">
                <CustomCheckCircleIcon />
                <h2>{text}</h2>
            </div>
        </Divider>
    )
}

const SectionDropDown = ({ children }) => {
    const { Panel } = Collapse
    return(
        <Collapse size="small">
            <Panel header="Select sub-tasks">
                <Space direction="vertical">
                   {children}
                </Space>
            </Panel>
        </Collapse>
    )
}

const ProjectFields = ({ project }) => {
    const [edit, setEdit] = useState(false)

    if (edit) {
        return(
            <>
                <Form method="post" className='flex flex-col' onSubmit={(() => setEdit(false))}>
                    <div className="flex flex-col items-center gap-2 my-4 w-2/3 m-auto">
                        <div className="text-lg font-serif w-96 flex gap-2 items-center"><span className="w-28">Project #: </span><Input name='projectNum' defaultValue={project.projectNum}/></div>
                        <div className="text-lg font-serif w-96 flex gap-2 items-center" ><span className="w-28">Address: </span><Input name='address' defaultValue={project.address} /></div>
                        <div className="text-lg font-serif w-96 flex gap-2 items-center"><span className="w-28">Client: </span><Input name='clientName' defaultValue={project.clientName}/></div>
                        <div className="text-lg font-serif w-96 flex gap-2 items-center"><span className="w-28">Start date: </span><DatePicker name='startDate' defaultValue={project.startDate.slice(0,10)}/></div>
                        <div className="w-96 flex gap-4 justify-end">
                            <button className="p-2 border-2 rounded-lg" type='submit' >Save</button>
                            <button className="p-2 border-2 rounded-lg" onClick={() => setEdit(false)} >Cancel</button>
                        </div>
                        
                    </div>
                </Form>
            </>
        )
    }

    return(
        <>
            <div className="flex flex-col items-center gap-2 my-4 w-2/3 m-auto">
                <div className="text-4xl font-serif flex gap-2">
                    Project #{formatProjectNumber(project.projectNum)} 
                </div>
                <div className="text-xl font-serif">{project.address}</div>
                <div className="font-serif italic">Client: {project.clientName}</div>
                <div className="font-serif italic">Start date: {new Date(project.startDate).toLocaleDateString()}</div>
                <div className="flex items-center self-end gap-2">
                    <EditOutlined onClick={() => setEdit(!edit)}/> 
                    <div>
                        <Form method="DELETE" className="">
                            <input type='image' className="h-4 w-4" src='https://res.cloudinary.com/dl4murstw/image/upload/v1688047296/delete_auccdu.png'></input>
                        </Form>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

const Input = ({ name, defaultValue, width }) => <input defaultValue={defaultValue} name={name} className={'bg-gray-5 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}/>
const DatePicker = ({ defaultValue }) => <input defaultValue={defaultValue} name='startDate' type="date" className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>