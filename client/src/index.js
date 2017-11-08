import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";
import "./index.css";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import reducer from "./redux/reducers/";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(()=>{
    console.log(store.getState());
});

ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));
