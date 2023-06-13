import React from "react";
import { Outlet } from "react-router";
import Header from "../components/public/header";


const Layout = () =>{

    return(

        <Outlet>
          <Header />
        </Outlet>
    );
}

export default Layout