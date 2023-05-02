import { Layout, Col, Row, Collapse, Divider, Space } from "antd"
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import ProgressBar from './ProgressBar'
import UserProfiles from './UserProfiles'
import TextInput from "./TextInput"

import SpatialLayout from '../pages/Project/SpatialLayout'
import Furnishing from '../pages/Project/Furnishing'
import Appliances from '../pages/Project/Appliances'
import Electrical from '../pages/Project/Electrical'
import ConceptBoard from '../pages/Project/ConceptBoard'
import Materials from '../pages/Project/Materials'
import TwoDCarpentryDetailDrawings from '../pages/Project/TwoDCarpentryDetailDrawings'
import ThreeDRenderings from '../pages/Project/ThreeDRenderings'

const Content = ({ project }) => {
  const { Panel } = Collapse

  return (
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
         style={{ marginBottom: "24px" }}>
          {/* {projects.map(project => (
            <div key={project.id}>
              <h3 style={{textAlign: "center"}}>{project.name}</h3>
              <h4>{'['}{project.address}{']'}</h4>
            </div>
          ))} */}

            <div>
              <h3 style={{textAlign: "center"}}>{project.name}</h3>
              <h4>{'['}{project.address}{']'}</h4>
            </div>
        </Row>

        <hr 
          style={{
            border: 'none',
            height: '1px',
            width: '60%',
            backgroundColor: '#333',
            marginBottom: "24px"
          }}
        />

        <Row className="align-right">
          <UserProfiles style={{marginBottom: "24"}} />
        </Row>

        <div 
        style={{
           display: "flex",
           justifyContent: "center", 
           alignItems: "center", 
           flexDirection: "column",
        }}>
          <Row>
            <Router>
              <div>
                <Divider orientation="left"><h2>Spatial Planning</h2></Divider>
                <Collapse size="small">
                  <Panel header="Select sub-tasks" style={{ width: "780px" }}>
                    <Space direction="vertical">
                      <Link to="/project/{id}/spatial-layout">Spatial Layout</Link>
                      <Link to="/project/{id}/furnishing">Furnishing</Link>
                      <Link to="/project/{id}/appliances">Appliances</Link>
                      <Link to="/project/{id}/electrical">Electrical</Link>
                    </Space>
                  </Panel>
                </Collapse>

                <Divider orientation="left"><h2>Concept Board & Materials</h2></Divider>
                <Collapse size="small">
                  <Panel header="Select sub-tasks">
                      <Space direction="vertical">
                        <Link to="/project/{id}/concept-board">Concept Board</Link>
                        <Link to="/project/{id}/materials">Materials</Link>
                      </Space>
                  </Panel>
                </Collapse>
                  
                <Divider orientation="left"><h2>Drawings</h2></Divider>
                <Collapse size="small">
                  <Panel header="Select sub-tasks">
                    <Space direction="vertical">
                      <Link to="/project/{id}/2d-carpentry-detail-drawings">2D Carpentry Detail Drawings</Link>
                      <Link to="/project/{id}/3d-renderings">3D Renderings</Link>
                    </Space>
                  </Panel>
                </Collapse>
              </div>
              
              <Routes>
                  <Route path="/project/:id/spatial-layout" element={<SpatialLayout />} />
                  <Route path="/project/:id/furnishing" element={<Furnishing />} />
                  <Route path="/project/:id/appliances" element={<Appliances />} />
                  <Route path="/project/:id/electrical" element={<Electrical />} />
                  <Route path="/project/:id/concept-board" element={<ConceptBoard />} />
                  <Route path="/project/:id/materials" element={<Materials />} />
                  <Route path="/project/:id/2d-carpentry-detail-drawings" element={<TwoDCarpentryDetailDrawings />} />
                  <Route path="/project/:id/3d-renderings" element={<ThreeDRenderings />} />
              </Routes>
            </Router>
          </Row>
        </div>

          <TextInput />
      </Layout.Content>
  )
}

export default Content