import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard, {loader as dashboardLoader} from './routes/Dashboard'
import Project, {loader as projectLoader} from './routes/Project'
import "./index.css"
import ErrorPage from './error-page'

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
                element: <Project />,
                loader: projectLoader 
            }
        ]
    }
  ])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)