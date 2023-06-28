import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard, {
    loader as dashboardLoader,
    action as rootAction,
} from "./routes/Dashboard"
import ProjectOverview, {
    loader as projectLoader,
    action as projectAction
} from "./routes/ProjectOverview"
import ErrorPage from "./error-page"
import SpatialLayout from "./routes/SpatialLayout"
import FurnishingBoard from "./routes/FurnishingBoard"
import ConceptBoard from "./routes/ConceptBoard"
import Materials from "./routes/Materials"
import ElevationDrawings from "./routes/ElevationDrawings"
import ThreeDRenderings from "./routes/ThreeDRenderings"
import Appliances from "./routes/Appliances"
import ElectricalPlan from "./routes/ElectricalPlan"
import "./index.css"
import Index from "./routes/Index"

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
        action: rootAction,
        children: [
            {
                index: true, element: <Index />
            },
            {
                path: ":projectId",
                element: <ProjectOverview />,
                loader: projectLoader,
                action: projectAction 
            },
            // Athiyen: should the right path be /project/:projectId/spatial-layout or /project:projectId/spatial-layout?
            {
                path: "/project/:projectId/spatial-layout",
                element: <SpatialLayout />,
                loader: projectLoader 
            },
            {
                path: "/project/:projectId/furnishing-board",
                element: <FurnishingBoard />,
                loader: projectLoader 
            },
            {
                path: "/project/:projectId/appliances",
                element: <Appliances />,
                loader: projectLoader 
            },
            {
                path: "/project:projectId/electrical-plan",
                element: <ElectricalPlan />,
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
                path: "/project/:projectId/elevation-drawings",
                element: <ElevationDrawings />,
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