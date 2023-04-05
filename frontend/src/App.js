import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

// import Filter from './components/Filter'

import SpatialLayout from './components/SpatialLayout'
import Furnishing from './components/Furnishing'
import Appliances from './components/Appliances'
import Electrical from './components/Electrical'
import ConceptBoard from './components/ConceptBoard'
import Materials from './components/Materials'
import TwoDCarpentryDetailDrawings from './components/TwoDCarpentryDetailDrawings'
import ThreeDRenderings from './components/ThreeDRenderings'

const App = () => {

  const padding = {
      padding: 5
    }

  return (
      <div>
          <p>Project page</p>
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