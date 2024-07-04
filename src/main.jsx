import React from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Details } from './pages/Details.jsx'
import { Error404 } from './pages/Error404.jsx'
import './App.css'
import './index.css'

// routing setup
const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'details/:countryName',
        element: <Details />
      }]
  },
])

// modifications made to the default boiler plate code
const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>,
)
