import React from "react";
import Baton from "./nonnie_baton.png";
import {connect} from "react-redux";
import {pictures} from "../../../redux/actions/";

class FlowToys extends React.Component{
    componentDidMount(){
        this.props.loadPicture()
    }
    render(){
        console.log(this.props)
        const flowtoys = {
            color: "white",
            height: "85vh",
            overflow: "scroll",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
        const contain1 = {
            color: "black",
            width: "80%",
            border: "magenta solid 2px",
            margin: "5px 10% 5px 10%",
            padding: "10px",
            background: "RGBa(252, 37, 199, .9)"
        }

        const contain2 = {
            color: "black",
            width: "75%",
            border: "#19EBFF solid 2px",
            margin: "5px 10% 5px 10%",
            padding: "10px",
            background: "RGBa(25, 231, 235, .9)"
        }

        const headline = {
            margin: "5px 10% 5px 10%",
            textShadow: "-1px 0 #19EBFF, 0 1px yellow, 1px 0 limegreen, 0 -1px magenta",
        }

        const titles = {
            fontSize: "2em",
            textShadow: "-1px 0 white, 0 1px white, 1px 0 black, 0 -1px black"
        }
        return(
            <div style={flowtoys}>

            <div style={headline}>
                <div>
                <h4 style={{fontSize: "2em"}}>Flowtoys are more commonly refered to as the
                    category Twirling. <br/></h4>
                <h4 style={{fontSize: "2em"}}>
                    Twirling is a form of object manipulation where an object is
                     twirled by one or two hands, the fingers or by other parts
                     of the body. <br/> Twirling practice manipulates the object in
                     circular or near circular patterns. <br/> It can also be done
                     indirectly by the use of another object or objects as in
                     the case of devil stick manipulation where handsticks are
                      used. <br/> Twirling is performed as a hobby, sport, exercise
                      or performance.
                </h4>
                <h5>
                    Listed below are some of the more commonly used toys.
                </h5>
             </div>
            </div>

            <div style={contain2}>
                <h5 style={titles}>Juggling</h5>
                    <div>
                        <li>Balls, Clubs, Knives?</li>
                    </div>
                <h5>Juggling is a physical skill, performed by a juggler,
                    involving the manipulation of objects for recreation,
                    entertainment, art or sport. <br/>The most recognizable form of
                     juggling is toss juggling. Juggling can be the manipulation
                      of one object or many objects at the same time, using one
                      or many hands. <br/>Jugglers often refer to the objects they
                      juggle as props. The most common props are balls, clubs,
                       or rings. <br/>Some jugglers use more dramatic objects such
                       as knives, fire torches or chainsaws. <br/>The term juggling
                       can also commonly refer to other prop-based manipulation
                        skills, such as diabolo, devil sticks, poi, cigar boxes,
                        contact juggling, hooping, yo-yo, and hat manipulation.
                </h5>
            </div>

            <div style={contain1}>
                <h5 style={titles}>Poi</h5>
                    <div>
                        <li>Fire/Meteor Poi</li>
                        <li>Glow Poi</li>
                        <li>New Zealand Poi</li>
                    </div>

                <h5>Poi refers to both a style of performing art and the equipment
                     used for engaging in poi performance. <br/> As a performance art,
                     poi involves swinging tethered weights through a variety of
                      rhythmical and geometric patterns. Poi artists may also sing
                       or dance while swinging their poi. <br/> Poi can be made from
                       various materials with different handles, weights, and
                       effects (such as fire). <br/>
                       Poi originated with the Māori people of New Zealand,
                       where it is still practiced today. Poi has also gained a
                       following in many other countries. <br/> The expansion of poi
                       culture has led to a significant evolution of the styles
                       practiced, the tools used, and the definition of the word
                        "poi."
                </h5>
            </div>

            <div style={contain2}>
                <h5 style={titles}>Devil/Flower Sticks</h5><img src={Baton} height="50px" alt=""/>
                <h5>The manipulation of the devil stick (also refered to as
                        devil-sticks, devilsticks, flower sticks,
                         gravity sticks, or juggling sticks) is a form of
                         gyroscopic juggling or
                         equilibristics, consisting of manipulating one stick
                          ("baton") between one or
                         two other sticks held one in each hand. <br/> The baton is
                          lifted, struck, or stroked by the two control sticks
                           ('handsticks' or 'sidesticks'), stabilising the baton
                           through gyroscopic motion. Devil sticks are believed
                            to have originated in China in the distant past, in
                           the form of simple wooden juggling sticks. <br/> They are
                           one of the circus arts, and is sometimes called
                           devil-sticking, twirling, sticking, or stick juggling.
                </h5>
            </div>

            <div style={contain1}>
                <h5 style={titles}>Staff Twirling</h5>
                <h5>Staff twirling is the art or sport of skillfully manipulating
                     a staff, such as a quarterstaff, bo, or other long length
                      of wood, metal, or plastic as recreation, sport, or as a
                       performance. <br/>In the martial art of bojutsu, a bo is used
                        as a weapon, increasing the force delivered in a strike,
                         through leverage. Bojitsu kata—detailed patterns of
                          movements practiced to perfect one's form—are also
                          used in many traditional Japanese arts, such as kabuki. <br/>
                           Some of these kata, are very flowing and pleasant to
                           experience, both as the one executing the movement,
                            and as a spectator. <br/>Staff twirling has enjoyed recent
                             growth in the dexterity play, juggling and fire
                              dancing communities, in part due to the influence
                               of martial arts, and in part due to increasing
                                popularity of adult play as recreation.
                </h5>
            </div>

            <div style={contain2}>
                <h5 style={titles}>Hooping</h5>
                <h5>Hooping is part of the greater spectrum of flow arts,
                     which are playful movement arts involving skill toys
                      that are used to evoke the exploration of dynamic,
                       flowing, and sequential movements. <br/> This movement,
                        and the related mind/body state, is referred to
                        as "flow". <br/>Technically, hooping is a form of object
                         manipulation and therefore shares some lineage with
                          juggling.
                          In its modern incarnation as an art or dance form,
                           and form of exercise, the practice of manipulating
                            a hoop is referred to either as hoop dance or simply
                             hooping. <br/> Hoop dance artists commonly refer to
                             themselves, and the greater hoop dance community,
                              as hoopers.</h5>
            </div>

            <div style={contain1}>
                <h5 style={titles}>Diabolo YoYo</h5>
                <h5>Developed by the ancient Chinese</h5>
                <h5>The diabolo is a juggling or circus prop consisting of an
                    axle and two cups or discs derived from the Chinese yo-yo. <br/>
                    This object is spun using a string attached to two hand
                    sticks. <br/> A large variety, possibly, "hundreds," of tricks
                    are possible with the diabolo, including tosses, and various
                     types of interaction with the sticks, string, and various
                     parts of the user's body. <br/> Multiple diabolos can be spun on
                      a single string. Like the Western yo-yo, it maintains its
                      spinning motion through a rotating effect based on
                      conservation of angular momentum.
                </h5>
            </div>

            <div style={contain2}>
                <h5 style={titles}>Meteor</h5>
                <h5>
                    A skill toy of Asian origin, the meteor consists of a rope,
                    usually between 5 and 8 feet long, with weights attached to
                     either end. Tricks are performed by swinging, wrapping and
                     throwing the meteor about the body.
                    The meteor is based on the Chinese meteor hammer, a bolo-like
                     weapon made from stones and rope. Approximately 1500 years
                     ago, this hunting weapon began its transition into a performing
                      art. The Chinese circus tradition has featured meteors
                      with brightly colored balls, glass bowls filled with colored
                      water, or pans of flaming oil in place of the stone weights.
                </h5>
            </div>

        </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
        pictures: state.pictures
    }
}

export default connect(mapStateToProps, pictures)(FlowToys);
