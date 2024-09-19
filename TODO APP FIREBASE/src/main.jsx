
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './pages/Layout.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
const router = createBrowserRouter ([
  {
    path : "/",
    element:<Layout />,
    children:[
      {
        path:"",
        element:<App />
      },
      {
        path:"Login",
        element:<Login />
      },
      {
        path:"Register",
        element:<Register />
      },
      {
        path:"*",
        element: <h1>Not found</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
