import React from 'react'
import {
  
  RouterProvider,

} from "react-router-dom";
 
import {router} from './layout/routees.jsx';

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
