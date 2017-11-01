import React from "react";
import {connect} from "react-redux";
import Picture from "./item.js";
import {main} from "../../../../redux/actions/";

function PicturesComponent(props){
    return(
        <div>
                <button>Delete</button>
                {props.pictures.map((picture)=>{
                    return <Picture picture = {picture}>
                })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, main)(PicturesComponent);
