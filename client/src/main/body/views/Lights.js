import React from "react";
import Baton from "./nonnie_baton.png";

function Lights(props){
    const lights = {
        color: "beige",
        height: "85vh",
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
    const contain1 = {
        width: "90%",
        border: "magenta solid 2px",
        margin: "5px 10% 5px 10%",
        padding: "10px",
        background: "RGBa(252, 37, 199, .9)"
    }

    const contain2 = {
        width: "90%",
        border: "#19EBFF solid 2px",
        margin: "5px 10% 5px 10%",
        padding: "10px",
        background: "RGBa(25, 231, 235, .9)"
    }

    const headline = {
        margin: "5px 10% 5px 10%",
    }

    const titles = {
        fontSize: "2em"
    }



    return(
        <div style={lights}>

            <div style={headline}>
                <div>
                <h4 style={titles}>There are many different kinds of FlowToys <br/>
                here are some pictures and info</h4>
                <h5>Poi refers to both a style of performing art and the equipment used for engaging in poi
                performance.
                As a performance art, poi involves swinging tethered weights through a variety of rhythmical
                 and geometric patterns. Poi artists may also sing or dance while swinging their poi. Poi can
                  be made from various materials with different handles, weights, and effects (such as fire).
                 Poi originated with the Māori people of New Zealand, where it is still practiced today.
                 Poi has also gained a following in many other countries. The expansion of poi culture has
                 led to a significant evolution of the styles practiced, the tools used, and the definition
                 of the word "poi". Below are some different practices and tools.</h5>
             </div>
            </div>

            <div style={contain2}>
                <h5 style={titles}>Devil Sticks</h5><img src={Baton} height="50px" alt=""/>
                <h6>The manipulation of the devil stick (also devil-sticks, devilsticks, flower sticks,
                         gravity sticks, or juggling sticks) is a form of gyroscopic juggling or
                         equilibristics, consisting of manipulating one stick ("baton") between one or
                         two other sticks held one in each hand. The baton is lifted, struck, or stroked
                          by the two control sticks ('handsticks' or 'sidesticks'), stabilising the baton
                           through gyroscopic motion.
                           Devil sticks are believed to have originated in China in the distant past, in
                           the form of simple wooden
                           juggling sticks. They are one of the circus arts, and is sometimes called
                           devil-sticking, twirling, sticking, or stick juggling.</h6>
            </div>

            <div style={contain1}>
                <h5 style={titles}>Poi</h5>
                <h6>Two balls. Two Strings. Two chains. Pinky Ring.</h6>
            </div>

            <div style={contain2}>
                <h5 style={titles}>Levitation Wand</h5>
                <h6>Levi Wand. Spin a stick around on a string... supposed to be an illusion</h6>
            </div>

            <div style={contain1}>
                <h5 style={titles}>Staff</h5>
                <h6>Normally about 60 inches long. Many different kinds of staffs</h6>
            </div>

            <div style={contain2}>
                <h5 style={titles}>Hoola Hooping</h5>
                <h6>Spinny spinny, toss and bouncey</h6>
            </div>

        </div>
    )
}

export default Lights;
