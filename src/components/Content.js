import { Layout, Col, Row } from "antd"
// import {
//   BrowserRouter as Router,
//   Routes, Route, Link
// } from 'react-router-dom'


import ProgressBar from './ProgressBar'
import UserProfiles from './UserProfiles'
import TextInput from "./TextInput"


// import SpatialLayout from './pages/Project/SpatialLayout'
// import Furnishing from './pages/Project/Furnishing'
// import Appliances from './pages/Project/Appliances'
// import Electrical from './pages/Project/Electrical'
// import ConceptBoard from './pages/Project/ConceptBoard'
// import Materials from './pages/Project/Materials'
// import TwoDCarpentryDetailDrawings from './pages/Project/TwoDCarpentryDetailDrawings'
// import ThreeDRenderings from './pages/Project/ThreeDRenderings'

const Content = ({ project }) => {

    return (
      <div>
        <Layout.Content>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
            justify="center" // center the components horizontally
            align="middle" // center the components vertically
            style={{ marginBottom: "24px" }} // add margin to create space between the two components
          >
            <Col style={{ paddingTop: "16px" }}>
              <ProgressBar />
            </Col>
          </Row>
         
          <div>
            <Row key={project.id} justify="center" align="middle"> 
              <Col>
                <p>{project.id}</p>
                <p>{project.address}</p>
              </Col>
            </Row>
          </div>
         

            <hr 
              style={{
                border: 'none',
                height: '1px',
                width: '250%',
                backgroundColor: '#333',
                // textAlign: 'center'
              }}
            />
            <UserProfiles />
            {/* <Router>
              <div>
                  <Link style={padding} to="/project/{id}/spatial-layout">Spatial Layout</Link>
                  <Link style={padding} to="/project/{id}/furnishing">Furnishing</Link>
                  <Link style={padding} to="/project/{id}/appliances">Appliances</Link>
                  <Link style={padding} to="/project/{id}/electrical">Electrical</Link>
                  <Link style={padding} to="/project/{id}/concept-board">Concept Board</Link>
                  <Link style={padding} to="/project/{id}/materials">Materials</Link>
                  <Link style={padding} to="/project/{id}/2d-carpentry-detail-drawings">2D Carpentry Detail Drawings</Link>
                  <Link style={padding} to="/project/{id}/3d-renderings">3D Renderings</Link>
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
          </Router> */}
            <TextInput />
        </Layout.Content>
      </div>
    )
}

export default Content