import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './App.css'
import './index.css'

// routing setup
const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/country',
    element: <App />
  },
])

// modifications made to the default boiler plate code
const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>,
)
