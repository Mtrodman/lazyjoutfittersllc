import './waterfowl.css'
import Footer from '../Footer/footer'
import dax from '../../assets/images/dax.jpeg'
import waterfowlheader from '../../assets/images/waterfowlheader.jpg'
import waterfowlbody1 from '../../assets/images/waterfowlbody1.jpg'
import waterfowlbody2 from '../../assets/images/waterfowlbody2.jpg'
import waterfowlbody3 from '../../assets/images/waterfowlbody3.jpg'
import waterfowlbody4 from '../../assets/images/waterfowlbody4.jpg'


function Waterfowl() {
    return (
      <div>
            <div className="waterfowlheaderCard">
            <img className="waterfowlheaderlogo"src={waterfowlheader} alt="Waterfowl Logo"></img>
              <p className="waterfowltitle">Waterfowl</p>
            </div>
            <div className="waterfowltextbox">
                <p className="waterfowltextbox1">
                    Come to where the mallards are all season and experience world class waterfowl hunting in Kansas!
                </p>
                <p className="waterfowltextbox2">
                    We want to form a relationship with clients and become your go-to east-central Kansas outfitter!
                    Year after year, hunt after hunt! We can’t wait to make memories with ya’ll!
                </p>
            </div>
           <div className="waterfowlwhatsincludedbox">
                <div className="waterfowlwhatsincluded">
                        <p className="waterfowlwhatsincludedtitle"> What's Included</p>
                            <ul>
                                <li className="waterfowlwhatsincludedlist">$200/day/person with lodgin included</li>
                                <li className="waterfowlwhatsincludedlist">Cleaning and bagging of game included (one wing or head kept attached for legal transport) </li>
                                <li className="waterfowlwhatsincludedlist"> 
                                    Completely guided: decoys, blinds and calling included and provided
                                </li>
                            </ul> 
                </div>
                <img className="waterfowlbody1"src={waterfowlbody1} alt="Waterfowl body 1 Logo"></img>
              </div>
            <div className="waterfowlhowwehuntbox">
              <img className="waterfowlbody2"src={waterfowlbody2} alt="Waterfowl body 2 Logo"></img>
                <div className="waterfowlhowwehunt">
                        <p className="waterfowlhowwehunttitle">How We Hunt</p>
                        <ul>
                            <li className="waterfowlhowwehuntlist">
                                Hunting ducks and geese over large field spreads of full bodies, socks, silhouettes and shell decoys
                            </li>
                            <li className="waterfowlhowwehuntlist">
                                Hunting ducks and geese over combo full body and floater spreads on cattle ponds and large watershed ponds
                            </li>
                            <li className="waterfowlhowwehuntlist">
                                We run A-frame or layout blinds depending on conditions and/or client preference
                            </li>
                        </ul>
                </div>
            </div>
            <div className="waterfowlwherewehuntbox">
                    <div className="waterfowlwherewehunt">
                            <p className="waterfowlwherewehunttitle">Where We Hunt</p>
                            <ul>
                                <li className="waterfowlwherewehuntlist">
                                    We hunt on 30,000 acres
                                </li>
                                <li className="waterfowlwherewehuntlist">
                                    Our hunt area is based out of Lyndon, KS, within 10 miles of Melvern Lake, Pomona Lake and the Flint Hills National Wildlife Refuge
                                </li>
                                <li className="waterfowlwherewehuntlist">
                                    This area holds huge numbers of ducks (mallards, pintails and wigeons), and geese (Canadas, speckle belly and snows)
                                </li>
                            </ul>
                    </div>
                    <img className="waterfowlbody3"src={waterfowlbody3} alt="Waterfowl body 3 Logo"></img>
              </div>
            <div className="waterfowlavailabilitybox">
                <img className="waterfowlbody4"src={waterfowlbody4} alt="Waterfowl body 4 Logo"></img>
                  <div className="waterfowlavailability">
                          <p className="waterfowlavailabilitytitle">Availabitlity For 2023</p>
                          <ul>
                              <li className="waterfowlavailabilitylist">
                                  Open dates on WEEKENDS ONLY (some exceptions – just reach out and we’ll do our best to accommodate your schedule)
                              </li>
                              <li className="waterfowlavailabilitylist">
                                  All weekends in November are already booked
                              </li>
                              <li className="waterfowlavailabilitylist">
                                  Open dates for WEEKENDS in December, January and February
                              </li>
                              <li className="waterfowlavailabilitylist">
                                  Some spring snow goose dates are available, but booking up fast (inquire for availability)
                              </li>
                          </ul>
                      </div>
                </div>
                <div className="waterfowlguide">
                    <div>
                        <img className="dax"src={dax} alt="Waterfowl Guide"></img>
                    </div>
                    <div className="guideinfobox">
                        <h2 className="waterfowlguidename">Dax Baker</h2>
                        <h3 className="waterfowlguidetitle">Head Waterfowl Guide</h3>
                        <p className="waterfowlguideinfo">
                            Dax is a relentless waterfowl hunter with a passion for putting people on hunts they 
                            won’t soon forget. He cut his teeth hunting public land in the Arkansas River bottoms 
                            of western Arkansas and eastern Oklahoma. He’s chased ducks and geese for 25 years 
                            across Arkansas, Oklahoma, Missouri and Kansas. He’s banded ducks with Ducks 
                            Unlimited at Oak Hammock Marsh in Winnipeg, Canada, and in eastern Arkansas at Five 
                            Oaks Lodge where he also studied waterfowl and wetland conservation, ecology, and 
                            biology. Won his first 12 gauge when he was 11 years old by coming in first at an 
                            adult open duck calling contest in Paris, Arkansas. “I approach waterfowl hunting a 
                            little different than other hunters. Scouting is key, everybody knows that. When 
                            scouting and I see a field or waterbody being utilized by numbers of ducks and/or
                              geese, I don’t stop there. It gets my brain thinking about the “why”? Why are these 
                              birds using that particular habitat? What food sources are they utilizing, row crop 
                              or natural browse? One species of duck/goose or several? Are they being driven by
                              weather or hunting pressure? I take a deep dive into understanding all those pieces
                                of the puzzle as a tool to help me put together the best plan of attack to ensure 
                                the highest probability of success for harvest.” Day in and day out he puts in the 
                                work to ensure our clients have the best experience possible during their time at 
                                Lazy J Outfitters. Check out his Instagram (@daxbake) for a sample of what clients
                                can look forward to at the end of a hunt.
                        </p>
                    </div>

                </div>
                <footer>
                  <Footer/>
                </footer>
        </div>
      
    )
}

export default Waterfowl