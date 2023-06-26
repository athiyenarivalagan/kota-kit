import { Link } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
import { getProject } from "../services/projects"

import { Layout, Col, Row, Collapse, Divider, Space } from "antd"
import CustomCheckCircleIcon from "../components/CustomCheckCircleIcon"
import ProgressBar from '../components/ProgressBar'
import UserProfiles from '../components/UserProfiles'
import TextInput from "../components/TextInput"


export async function loader({ params }) {
    const project = await getProject(params.projectId)
    return project
}

const ProjectOverview = () => {
    const project = useLoaderData()
    

    
    return (
        <>
            <Layout.Content className="layout-content">
                <ProgressBar />
                <div>{project.name}</div>
                
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
        </>
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