import React from "react";
import {Row, Col} from "react-bootstrap";

function Footer(props){
    const footer = {
        color: "white",
        height: "50px",
        marginTop: "15px",
        background: "url('https://media.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif')",
        width: "100%"
    }


    const divd = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
}
    return(
    <div style={{...divd, ...footer}}>

                <i class="fa fa-css3" aria-hidden="true" height="60px"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-github" aria-hidden="true"></i>
                <i class="fa fa-soundcloud" aria-hidden="true"></i>
                <i class="fa fa-slack" aria-hidden="true"></i>
                <i class="fa fa-skype" aria-hidden="true"></i>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                <i class="fa fa-google-plus" aria-hidden="true"></i>
                <i class="fa fa-chrome" aria-hidden="true">made by: Nonnie</i>

    </div>
    )
}

export default Footer;
