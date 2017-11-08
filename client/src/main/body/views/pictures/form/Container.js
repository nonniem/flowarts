import React from "react";
import FormComponent from "./Component";
import {connect} from "react-redux";
import {pictures} from "../../../../../redux/actions/";

class FormContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            title: "",
            description: "",
            imgUrl: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        e.persist();
        this.setState((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addPicture(this.state);
        this.setState({
            title: "",
            description: "",
            imgUrl: ""
        });
    }

    render(){
        return(
            <FormComponent
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                input={this.state}
                                        />
        )
    }
}

export default connect(null, pictures)(FormContainer);
