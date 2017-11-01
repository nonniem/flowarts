import React from "react";
import Lights from "./views/Lights";
import Home from "./views/Home";
import PicturesComponent from "./views/pictures/Component.js";
import {Switch, Route} from "react-router-dom";

function Body(props){
    return(
        <div>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/pictures" component={PicturesComponent}/>
                <Route path="/lights" component={Lights}/>
            </Switch>
        </div>
    )
}

export default Body;
