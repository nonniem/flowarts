import React from "react";
import {Button, input} from "react-bootstrap";

function FormComponent(props){
    const forms = {
        background: "url('https://media.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif')",
        justifyContent: "space-between",
        display: "flex",
        width: "30%"
    }

    const inputs = {
        backgroundColor: "transparent",
        outlineColor: "yellow",
        color: "yellow",
        background: "url('https://media.giphy.com/media/l3q2XB76CaWPggiNW/giphy.gif')",
        
    }

    const backgrouns = {
        background: "url('https://media.giphy.com/media/l3q2XB76CaWPggiNW/giphy.gif')",
        height: "100%",
        color: "white"
    }

    return(
        <form onSubmit={props.handleSubmit} style={forms}>
            <input
                style={inputs}
                name="title"
                onChange={props.handleChange}
                value={props.input.title}
                type="text"
                placeholder="Tite L"/>
            <input
                style={inputs}
                name="description"
                onChange={props.handleChange}
                value={props.input.description}
                type="text"
                placeholder="Deescription"/>
            <input
                style={inputs}
                name="imgUrl"
                onChange={props.handleChange}
                value={props.input.imgUrl}
                type="text"
                placeholder="Image You Rl"/>
            <button style={backgrouns}type="submit">Sub MiT</button>
        </form>
    )
}

export default FormComponent;
