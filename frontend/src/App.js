import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import {
//   BrowserRouter as Router,
//   Routes, Route, Link
// } from 'react-router-dom'


// import SpatialLayout from './pages/Project/SpatialLayout'
// import Furnishing from './pages/Project/Furnishing'
// import Appliances from './pages/Project/Appliances'
// import Electrical from './pages/Project/Electrical'
// import ConceptBoard from './pages/Project/ConceptBoard'
// import Materials from './pages/Project/Materials'
// import TwoDCarpentryDetailDrawings from './pages/Project/TwoDCarpentryDetailDrawings'
// import ThreeDRenderings from './pages/Project/ThreeDRenderings'

/* import components */
import AppHeader from './components/common/AppHeader' 
import SideBar from './components/SideBar'
import ProjectMenu from './components/ProjectMenu'

import { Layout } from 'antd'


const App = () => {
  const [projects, setProjects] = useState([])
  console.log(projects)
  // const [contentIndex, setContentIndex] = useState(0)
  const [selectedKey, setSelectedKey] = useState("0")
  const changeSelectedKey = (event) => {
    const key = event.key
    setSelectedKey(key)
    // setContentIndex(+key)
  }

  // const padding = {
  //   padding: 5
  // }

  useEffect(() => {
    axios
      .get('http://localhost:3001/projects')
      .then(response => {
        console.log('promise fullfilled')
        setProjects(response.data)
      })
  }, [])

  const Menu =(
    <ProjectMenu
    projects={projects}
    selectedKeys={selectedKey}
    changeSelectedkey={changeSelectedKey}
     />
  )

  
  return (
      <div>
        {/* <Layout className='mainLayout'> */}
          {/* <Header> */}
            <AppHeader menu={Menu} />
          {/* </Header> */}
        <Layout>
          {/* <Sider> */}
            <SideBar menu={Menu} />
          {/* </Sider> */}
          {/* <Layout.Content className='content'>
            {projects[contentIndex]}
          </Layout.Content> */}
          {/* <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              Content
            </Content>
          </Layout> */}
        {/* </Layout> */}
        </Layout>

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
    </div>
  )
}

export default App