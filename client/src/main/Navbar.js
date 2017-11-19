import React from "react";
import {Link} from "react-router-dom";

function Navbar(props){
    const home = {
        color: "#19EBFF",
        fontSize: "1.4em",
        textShadow: "-1px 0 #19EBFF, 0 1px white, 1px 0 limegreen, 0 -1px #19EBFF"
    }

    const pictures = {
        color: "limegreen",
        fontSize: "1.4em",
        textShadow: "-1px 0 1px white, 0 1px 1px white, 1px 0 1px white, 0 -1px 1px white"
    }

    const flowtoys = {
        color: "magenta",
        textAlign: "center",
        fontSize: "1.4em",
        textShadow: "-1px 0 #19EBFF, 0 1px yellow, 1px 0 limegreen, 0 -1px white"
    }
    return(
        <div>
            <nav className="nav">
                <Link to="/pictures" style={pictures} className="navHover">Pictures</Link>
                <Link to="/" style={home} className="navHover">Home</Link>
                <Link to="/flowtoys" style={flowtoys} className="navHover">FlowToys</Link>
            </nav>
        </div>
    )
}

export default Navbar;
