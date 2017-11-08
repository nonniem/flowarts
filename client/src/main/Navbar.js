import React from "react";
import {Link} from "react-router-dom";


function Navbar(props){
    const home = {
        color: "#19EBFF",
        fontSize: "1.4em"
    }

    const pictures = {
        color: "limegreen",
        fontSize: "1.4em"
    }

    const lights = {
        color: "magenta",
        textAlign: "center",
        fontSize: "1.4em"
    }
    return(
        <div>
            <nav className="nav">
                <Link to="/pictures" style={pictures}>Pictures</Link>
                <Link to="/" style={home}>Home</Link>
                <Link to="/lights" style={lights}>Lights</Link>
            </nav>

        </div>
    )
}

export default Navbar;
