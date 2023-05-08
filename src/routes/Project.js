import { useLoaderData } from "react-router-dom"
import { getProject } from "../services/projects"

// import { Layout, Col, Row, Collapse, Divider, Space } from "antd"
import { Layout, Col, Row } from "antd"
import ProgressBar from '../components/ProgressBar'
import UserProfiles from '../components/UserProfiles'
// import TextInput from "../components/TextInput"


export async function loader({ params }) {
    const project = await getProject(params.projectId)
    return project
  }

const Project = () => {
    const project = useLoaderData()


    return (
        <>
            <Layout.Content className="layout-content">
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

                <Row
                    justify="center"
                    align="middle"
                    style={{ marginBottom: "24px" }}
                >
                {/* <> */}
                    <h3 style={{textAlign: "center"}}>{project.name}</h3>
                    <h4>{'['}{project.address}{']'}</h4>
                {/* </> */}
                </Row>

                <hr
                    style={{
                        border: 'none',
                        height: '1px',
                        width: '60%',
                        backgroundColor: '#333',
                        marginBottom: "24px"
                    }} />

                <Row className="align-right">
                    <UserProfiles style={{ marginBottom: "24" }} />
                </Row>
                {/* <TextInput /> */}
            </Layout.Content>
        </>
    )
}

export default Project