import React from "react"
import Nav from "./conponent/Nav"
import { Outlet } from "react-router-dom"




const Layout = () => {
    return(
        <>
        <Nav />
        <Outlet />
        </>
    )
}

export default Layout