import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import ErrorPage from './error-page'
import Resume from './components/Resume'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/resume',
    element: <Resume />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)
