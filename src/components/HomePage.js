import React from "react";
import NavBar from "./navbar";
import LogIn from "./login";

export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <div><NavBar/></div>


                <div align = "center"><LogIn/> </div>

            </div>
            
            

        );
    }
}