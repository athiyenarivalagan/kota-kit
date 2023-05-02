import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard from './routes/Dashboard';
import Project, {loader as projectLoader} from './routes/Project';
import App from './App'

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>This is the placeholder home page. Pls go to /project</div>
    },
    {
        path: "/project",
        element: <Dashboard />,
        loader: () => ['123','456'],
        children: [
            {
                path: ":projectId",
                element: <Project />,
                loader: projectLoader 
            }
        ]
    }
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)