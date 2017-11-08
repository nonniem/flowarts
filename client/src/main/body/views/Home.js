import React from "react";


function Home(props){
        const home = {
            color: "white",
            height: "80vh"
        }

        const imag = {
            maxWidth: "100%",
            margin: "auto",
            paddingTop: "40px"
        }

        const img = {
            borderRadius: "5%"
        }
        return(
            <div style={home}>
                <h3 >Welcome to Poi Community, home of all things that spin! <br/>
                     I Nonnie would like to welcome you into our family. Enjoy!</h3>
                 <h3>Nothing in life comes easy. Not even Poi! There are many different
                 levels of spinners
                 and everyone has there own style. There isnt such a thing as right
                 or wrong in poi. There are proper ways of doing things but there isnt anything that states the
                 right or wrong way to do.. well anything.
             </h3>
                <h3>Expressing yourself is a very important part of each of us. No-one is the same and we all
                    have different ways of being ourselves. Find yourself and something that you can excel with
                     and enjoy practicing. Even if it doesn’t involve juggling. Check out the other tabs for
                      more information and to check out what other users have posted.</h3>

                <img style={img} src="https://media3.giphy.com/media/6sxOX7lCMxYFG/200.webp#0-grid1" alt=""/>

            </div>
        )
    }


export default Home;
