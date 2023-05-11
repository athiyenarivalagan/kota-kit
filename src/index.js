import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard, {loader as dashboardLoader} from './routes/Dashboard'
import ProjectOverview, {loader as projectLoader} from './routes/ProjectOverview'
import ErrorPage from "./error-page"
import SpatialLayout from "./routes/SpatialLayout"
import Furnishing from "./routes/Furnishing"
import ConceptBoard from "./routes/ConceptBoard"
import Materials from "./routes/Materials"
import TwoDCarpentryDetailDrawings from "./routes/TwoDCarpentryDetailDrawings"
import ThreeDRenderings from "./routes/ThreeDRenderings"
import Appliances from "./routes/Appliances"
import Electrical from "./routes/Electrical"
import "./index.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>This is the placeholder home page. Pls go to /project</div>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/project",
        element: <Dashboard />,
        loader: dashboardLoader,
        children: [
            {
                path: ":projectId",
                element: <ProjectOverview />,
                loader: projectLoader 
            },
            // Athiyen: should the right path be /project/:projectId/spatial-layout or /project:projectId/spatial-layout?
            {
                path: "/project/:projectId/spatial-layout",
                element: <SpatialLayout />,
                loader: projectLoader 
            },
            {
                path: "/project/:projectId/furnishing",
                element: <Furnishing />,
                loader: projectLoader 
            },
            {
                path: "/project/:projectId/appliances",
                element: <Appliances />,
                loader: projectLoader 
            },
            {
                path: "/project:projectId/electrical",
                element: <Electrical />,
                loader: projectLoader 
            },
            {
                path: "/project/:projectId/concept-board",
                element: <ConceptBoard />,
                loader: projectLoader 
            },
            {
                path: "/project/:projectId/materials",
                element: <Materials />,
                loader: projectLoader 
            },
            {
                path: "/project/:projectId/2d-carpentry-detail-drawings",
                element: <TwoDCarpentryDetailDrawings />,
                loader: projectLoader 
            },
            {
                path: "/project/:projectId/3d-renderings",
                element: <ThreeDRenderings />,
                loader: projectLoader 
            }
        ]
    }
  ])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)