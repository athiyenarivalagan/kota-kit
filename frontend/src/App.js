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
                  <Link style={padding} to="/project/spatial_layout">Spatial Layout</Link>
                  <Link style={padding} to="/project/furnishing">Furnishing</Link>
                  <Link style={padding} to="/project/appliances">Appliances</Link>
                  <Link style={padding} to="/project/electrical">Electrical</Link>
                  <Link style={padding} to="/project/concept_board">Concept Board</Link>
                  <Link style={padding} to="/project/materials">Materials</Link>
                  <Link style={padding} to="/project/2d_carpentry_detail_drawings">2D Carpentry Detail Drawings</Link>
                  <Link style={padding} to="/project/3d_renderings">3D Renderings</Link>
              </div>

              <Routes>
                  <Route path="/project/spatial_layout" element={<SpatialLayout />} />
                  <Route path="/project/furnishing" element={<Furnishing />} />
                  <Route path="/project/appliances" element={<Appliances />} />
                  <Route path="/project/electrical" element={<Electrical />} />
                  <Route path="/project/concept_board" element={<ConceptBoard />} />
                  <Route path="/project/materials" element={<Materials />} />
                  <Route path="/project/2d_carpentry_detail_drawings" element={<TwoDCarpentryDetailDrawings />} />
                  <Route path="/project/3d_renderings" element={<ThreeDRenderings />} />
              </Routes>
          </Router>
      </div>
    )
}

export default App