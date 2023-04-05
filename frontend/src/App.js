import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import SpatialLayout from './pages/Project/SpatialLayout'
import Furnishing from './pages/Project/Furnishing'
import Appliances from './pages/Project/Appliances'
import Electrical from './pages/Project/Electrical'
import ConceptBoard from './pages/Project/ConceptBoard'
import Materials from './pages/Project/Materials'
import TwoDCarpentryDetailDrawings from './pages/Project/TwoDCarpentryDetailDrawings'
import ThreeDRenderings from './pages/Project/ThreeDRenderings'


const App = () => {

  const padding = {
    padding: 5
  }

  return (
      <div>
          <h2>Projects Page</h2>
          {/* <h2>Landing Page</h2> */}
          <Router>
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
          </Router>
      </div>
    )
}

export default App