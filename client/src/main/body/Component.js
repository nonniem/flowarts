import React from "react";
import Lights from "./views/Lights";
import Home from "./views/Home";
import Main from "./views/pictures/main";
import {Switch, Route} from "react-router-dom";

function Body(props){
    return(
        <div className="body">
            <Switch>
                <Route path="/pictures" component={Main}/>
                <Route path="/lights" component={Lights}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    )
}

export default Body;
