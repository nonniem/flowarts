import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Body from "./body/Component";

function App(props){
    return(
        <div>

            <div>
                <Navbar/>
            </div>

            <div>
                <Body/>
            </div>

            <div>
                <Footer/>
            </div>

        </div>
    )
}

export default App;
