import React from "react";
import FormContainer from "./form/Container";
import PictureComponent from "./Component";
import {connect} from "react-redux";
import {pictures} from "../../../../redux/actions/";

class PictureContainer extends React.Component{
    constructor(){
        super();
        this.genList = this.genList.bind(this);
    }

    genList(){
        return this.props.pictures.map((picture, _id)=> {
            return <PictureComponent
                        key={picture._id}
                        id={_id}
                        picture={picture}/>
        })
    }

    componentDidMount(){
        this.props.loadPicture()
    }

    render(){
        return(
                <div style={{height: "80vh", overflow: "scroll"}}>
                    {this.genList()}
                </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        pictures: state.pictures
    }
}

export default connect(mapStateToProps, pictures)(PictureContainer);
