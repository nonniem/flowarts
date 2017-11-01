import React from "react";

function Picture(props){

    return(
        <div>
            <h4>props.picture.title</h4>
            <h4>props.picture.description</h4>
            <img src={props.picture.imgUrl} alt=""/>
        </div>
    )
}

export default Picture;
