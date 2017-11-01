import React from "react";
import FormComponent from "./Component";
import {connect} from "react-redux";
import {} from "../../../../../redux/actions/";

class FormContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            input: {
                title: "",
                description: "",
                imgUrl: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        e.persist();
        this.setState((prevState) => {
            return {
                input: {
                    prevState.input,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addPicture(this.state.input);
        this.setState({
            input: {
                name: "",
                description: "",
                imgUrl: ""
            }
        })
    }

    render(){
        return(
            <FormComponent
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                input={this.state.input}
                                        />
        )
    }
}

export default connect(null, {})(FormContainer);
