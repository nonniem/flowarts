import React from "react";
import {Link} from "react-router-dom";

function Navbar(props){
    return(
        <div>
            <div>
                <Link to="/" >Home</Link>
                <Link to="/pictures" >Pictures</Link>
                <Link to="/lights" >Kinds of <br/> Lights</Link>
            </div>
        </div>
    )
}

export default Navbar;
