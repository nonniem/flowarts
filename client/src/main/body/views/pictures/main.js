import React from "react";
import FormContainer from "./form/Container";
import PictureContainer from "./Container";

function Main(props){
    return(
        <div style={{height: "80vh", hidden: "overflow"}}>
            <FormContainer/>
            <PictureContainer/>
        </div>
    )
}

export default Main;
