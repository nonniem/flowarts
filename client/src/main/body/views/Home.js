import React from "react";


function Home(props){
        const home = {
            color: "white",
            height: "80vh",
            overflowY: "scroll",
            maxWidth: "80%",
            minWidth: "150px",
            textShadow: "-1px 0 #19EBFF, 0 1px yellow, 1px 0 limegreen, 0 -1px magenta",
        }

        const img = {
            borderRadius: "5%",
            maxWidth:"100%"
        }
        return(
            <div style={home}>
                <h3>
                    Flow Arts is a general term used to describe the intersection
                     of a variety of movement-based disciplines including dance,
                      juggling, fire-spinning, and object manipulation. The broad
                       category Flow Arts includes a variety of pursuits that
                       harmonize skill-based techniques with creative expression
                        to achieve a state of present-moment awareness known as Flow.
                        Common forms of Flow Arts include Poi & Staff spinning,
                         hula hoop (or “hooping”), juggling, sphere manipulation
                          (or “contact juggling”), and fan dance. New props and
                          expressions are emerging all the time as flow artists
                          cross pollinate with martial arts, yoga, circus,
                          belly dance, and beyond.
                </h3>
                <h3>Expressing yourself is a very important part of each of us.
                     <br/> No-one is the same and we all
                    have different ways of being ourselves. Find yourself and
                    something that you can excel with
                     and enjoy practicing. Even if it doesn’t involve juggling.
                      Check out the other tabs for
                      more information and to check out what other users have
                      shared.</h3>

                <img style={img} src="https://media3.giphy.com/media/6sxOX7lCMxYFG/200.webp#0-grid1" alt=""/>

            </div>
        )
    }


export default Home;
