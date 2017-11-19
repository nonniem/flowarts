import React from "react";
import {input} from "react-bootstrap";

function FormComponent(props){

    const styles = {
        inputs: {
                backgroundColor: "transparent",
                outlineColor: "yellow",
                color: "yellow",
                borderRadius: "5%",
                marginLeft: "15px",
                marginRight: "15px",
                boxShadow: "1px -1px 2px magenta, -1px 0 1px limegreen, -2px -2px 2px #19EBFF, 0px 1px 1px magenta",
                border: "1px solid white"
            },
        backgrouns: {
                background: "url('http://img61.laughinggif.com/pic/HTTPS9tZWRpYS5naXBoeS5jb20vbWVkaWEvV1VtbE1ld00wSEFidS9naXBoeS5naWYlog.gif') center",
                backgroundSize: "cover",
                height: "100%",
                color: "white",
                width: "80px",
                textShadow: "-1px 0 1px #19EBFF, 0 1px 1px limegreen, 1px 0 1px magenta, 0 -1px 1px #19EBFF",
                boxShadow: "1px -1px 1px magenta, -1px 0 1px limegreen, -2px -2px 2px #19EBFF, 0px 1px 1px magenta",
                border: "1px solid white",
                outlineColor: "black"
            }
    }



    return(
        <form onSubmit={props.handleSubmit} style={styles.forms}>
            <input
                style={styles.inputs}
                name="title"
                onChange={props.handleChange}
                value={props.input.title}
                type="text"
                placeholder="Tite L"/>
            <input
                style={styles.inputs}
                name="description"
                onChange={props.handleChange}
                value={props.input.description}
                type="text"
                placeholder="Deescription"/>
            <input
                style={styles.inputs}
                name="imgUrl"
                onChange={props.handleChange}
                value={props.input.imgUrl}
                type="text"
                placeholder="Image You Rl"/>
            <button style={styles.backgrouns}type="submit">Sub MiT</button>
        </form>
    )
}

export default FormComponent;
