import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Navbar from '../components/Navbar'

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
          {
          navbar.map(({path, element, id})=>{
            return <Route key={id} path= {path} element={element} />
          })
        }
        <Route path= '/' element={<Navigate to = {'/main'} />}/>
        <Route path= '*' element={<h1>404 NOT FOUND</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Root