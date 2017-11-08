import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Body from "./body/Component";
import {Row, Col} from "react-bootstrap";

function App(props){
    const view = {

        height: "100vh"
    }
    const view1 = {
        height: "100vh"
    }

return(
      <div className="outside" style={view}>
        <div className="box" >
          <div className="box1">
            <div className="box2">
                <Row >
                    <Col xs={12}>
                        <Navbar/>
                    </Col>
                    <Col xs={12}>
                        <Body/>
                    </Col>
                    <Col xs={12}>
                        <Footer/>
                    </Col>
                </Row>
            </div>
          </div>
        </div>
      </div>
    )
}

export default App;
