import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import AddProduct from './components/AddProducts'
import HomePage from './components/Homepage'

function App() {

  const routes = createBrowserRouter([
      {
        path:"/",
        element: <HomePage/>
      },
      {
          path:'get',
          element:<Products/>
      },
      {
        path:'add',
        element:<AddProduct/>
      },
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
