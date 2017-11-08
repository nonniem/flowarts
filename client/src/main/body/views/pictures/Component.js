import React from "react";
import {connect} from "react-redux";
import {pictures} from "../../../../redux/actions/";
import {Button} from "react-bootstrap";

function Picture(props){
    const style = {
        color: "white"
    }

    const container = {
            // height: "auto",
            maxWidth: "100%",
            // minWidth: "200px",
            margin: "20px",
            display: "inline-block",
            border: "white 1px solid",
            borderRadius: "3%",
            // background: "RGBa(77, 253, 171, .8)",
            background: "url('https://media.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif')",
            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
    }

    const image = {
        height: "auto",
        maxWidth: "100%",
        minWidth: "200px",
        borderRadius: "4%"
    }

    const buttons ={
        background: "url('https://media.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif')"
    }

    return(
        <div style={container}>
            <img style={image} src={props.picture.imgUrl} alt=""/>
            <div style={style}>
                <h4>{props.picture.title}</h4>
                <h4>{props.picture.description}</h4>
            </div>
            <Button style={buttons}onClick={()=>{props.deletePicture(props.picture._id)}}>D e L eaT</Button>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return (
        pictures: state.pictures
    )
}

export default connect(mapStateToProps, pictures)(Picture);
