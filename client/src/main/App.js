import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Body from "./body/Component";

function App(props){
    const styles ={
        view: {
            height: "100vh"
        }
    }


return(
      <div className="outside" style={styles.view}>
        <div className="box" >
          <div className="box1">
            <div className="box2">
                        <Navbar/>
                        <Body/>
                        <Footer/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default App;
