import React from "react";
import {connect} from "react-redux";
import {pictures} from "../../../../redux/actions/";
import {Button} from "react-bootstrap";

function Picture(props){
const styles = {
    style: {
            color: "white",
            maxWidth: "100%",
            textShadow: "-1px 0 yellow, 0 1px limegreen, 1px 0 magenta, 0 -1px #19EBFF",
        },
    container: {
            // height: "auto",
            maxWidth: "100%",
            // minWidth: "200px",
            margin: "20px",
            display: "inline-block",
            // border: "white 1px solid",
            borderRadius: "4%",
            // background: "RGBa(77, 253, 171, .8)",
            background: "url('http://img28.laughinggif.com/pic/HTTP21lZGlhLmdpcGh5LmNvbS9tZWRpYS9OR0FMUUJVZ3ZtVlRhL2dpcGh5LmdpZgloglog.gif') centerTop",
            backgroundSize: "cover",
            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            boxShadow: "1px -1px 1px magenta, -1px 0 1px limegreen, -2px -2px 2px #19EBFF, 0px 1px 1px magenta"
        },
    image: {
           height: "auto",
           maxWidth: "600px",
           width: "100%",
           borderRadius: "4%"
       },
    buttons: {
           background: "url('https://media.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif')",
           color: "black",
           textShadow: "-1px 0 yellow, 0 1px limegreen, 1px 0 magenta, 0 -1px #19EBFF",
           boxShadow: "1px -1px 1px magenta, -1px 0 1px limegreen, -2px -2px 2px #19EBFF, 0px 1px 1px magenta",
       }
}

    return(
        <div style={styles.container}>
            <img style={styles.image} src={props.picture.imgUrl} alt=""/>
            <div style={styles.style}>
                <h4>{props.picture.title}</h4>
                <h4>{props.picture.description}</h4>
            </div>
            <Button style={styles.buttons}onClick={()=>{props.deletePicture(props.picture._id)}}>D e L eaT</Button>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return (
        pictures: state.pictures
    )
}

export default connect(mapStateToProps, pictures)(Picture);
