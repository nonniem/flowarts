import React from "react";
import FlowToys from "./views/FlowToys";
import Home from "./views/Home";
import Main from "./views/pictures/main";
import {Switch, Route} from "react-router-dom";

function Body(props){
    return(
        <div className="body">
            <Switch>
                <Route path="/pictures" component={Main}/>
                <Route path="/Flowtoys" component={FlowToys}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    )
}

export default Body;
