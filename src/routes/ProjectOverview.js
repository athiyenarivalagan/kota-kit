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
    const { Panel } = Collapse

    
    return (
        <>
            <Layout.Content className="layout-content">
                {/* Progress Bar */}
                <Row
                    gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }}
                    justify="center" // center horizontally
                    align="middle" // center vertically
                    style={{ marginBottom: "24px" }}
                >
                    <Col style={{ paddingTop: "16px" }}>
                        <ProgressBar />
                    </Col>
                </Row>
                
                {/* Project Details */}
                <Row
                    justify="center"
                    align="middle"
                    style={{ marginBottom: "24px" }}
                >
                    <Space direction="vertical">
                        <h3 style={{ textAlign: "center", margin: 0 }}>{project.name}</h3>
                        <h4 style={{ margin: 0 }}>{`[${project.address}]`}</h4>
                    </Space>
                </Row>

                <hr
                    style={{
                        border: 'none',
                        height: '1px',
                        width: '60%',
                        backgroundColor: '#333',
                        marginBottom: "24px"
                    }} />

                {/* User Profiles */}
                <Row className="align-right">
                    <UserProfiles style={{ marginBottom: "24" }} />
                </Row>
                
                {/* Main Sections */}
                <div 
                    style={{
                    display: "flex",
                    justifyContent: "center", 
                    alignItems: "center", 
                    flexDirection: "column",
                }}>
                    <Row>
                        <div>
                            {/* Spatial Planning Section */}
                            <Divider orientation="left">
                                <Space>
                                    <CustomCheckCircleIcon />
                                    <h2>Spatial Planning</h2>
                                </Space>
                            </Divider>

                                <Collapse size="small">
                                    <Panel header="Select sub-tasks" style={{ width: "780px" }}>
                                        <Space direction="vertical">
                                            <Link to={`/project/${project.id}/spatial-layout`}>Spatial Layout</Link>
                                            <Link to={`/project/${project.id}/furnishing-board`}>Furnishing</Link>
                                            <Link to={`/project/${project.id}/appliances`}>Appliances</Link>
                                            <Link to={`/project/${project.id}/electrical-plan`}>Electrical Plans</Link>
                                        </Space>
                                    </Panel>
                                </Collapse>

                            {/* Concept Boards & Materials */}
                            <Divider orientation="left">
                                <Space>
                                    <CustomCheckCircleIcon />                                    <h2>Concept Board & Materials</h2>
                                </Space>
                            </Divider>

                                <Collapse size="small">
                                    <Panel header="Select sub-tasks">
                                        <Space direction="vertical">
                                            <Link to={`/project/${project.id}/concept-board`}>Concept Board</Link>
                                            <Link to={`/project/${project.id}/materials`}>Materials</Link>
                                        </Space>
                                    </Panel>
                                </Collapse>

                            {/* Drawings */} 
                            <Divider orientation="left">
                                <Space>
                                    <CustomCheckCircleIcon />                                    <h2>Drawings</h2>
                                </Space>
                            </Divider>

                                <Collapse size="small">
                                    <Panel header="Select sub-tasks">
                                        <Space direction="vertical">
                                            <Link to={`/project/${project.id}/elevation-drawings`}>Elevation Drawings</Link>
                                            <Link to={`/project/${project.id}/3d-renderings`}>3D Renderings</Link>
                                        </Space>
                                    </Panel>
                            </Collapse>
                        </div>              
                    </Row>
                </div>
                <Row>
                    <Col span={16} offset={4}>
                        <TextInput />
                    </Col>    
                </Row>
            </Layout.Content>
        </>
    )
}

export default ProjectOverview