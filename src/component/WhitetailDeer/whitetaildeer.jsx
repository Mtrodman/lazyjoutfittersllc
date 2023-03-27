import './whitetaildeer.css'
import Footer from '../Footer/footer'
import deerheader from '../../assets/images/deerheader.jpg'
import deerbody1 from '../../assets/images/deerbody1.jpg'
import deerbody2 from '../../assets/images/deerbody2.jpg'
import deerbody3 from '../../assets/images/deerbody3.jpg'

function WhiteTailDeer() {
    return (
        <div>
                <div className="whitetailheaderCard">
                <img className="deerheaderlogo"src={deerheader} alt="Deer Logo"></img>
                    <p className="whitetailtitle">White Tail Deer</p>
                </div >
                <div className="whitetailtextbox">
                    <p className="whitetailtextbox1">
                    Central-Eastern Kansas bow hunting paradise.
                    </p>
                    <p className="whitetailtextbox2">
                    We pride ourselves on our bow hunting opportunities and hold the bow hunting near and dear 
                    to our hearts! We’ll show you the deer; the killing is up to you! We want to form a 
                    relationship with clients and become your go-to east-central Kansas outfitter! Year after 
                    year, hunt after hunt! We can’t wait to make memories with ya’ll!
                    </p>
                </div>
                <div className="whatsincludedbox">
                        <div className="whatsincluded">
                            <p className="whatsincludedtitle"> What's Included</p>
                                <ul>
                                    <li className="whatsincludedlist">$3,500 for 6 days of Premium Whitetail Hunting</li>
                                    <li className="whatsincludedlist">Meals and Lodging included </li>
                                        <ul>
                                            <li className="whatsincludedlist">
                                                Plan for a cooked-hearty breakfast and a cooked-hot-hearty dinner 
                                                fridge and pantry full of snack bars and sandwich stuff for mid day
                                            </li>
                                            <li className="whatsincludedlist">
                                                Lodge is fully furnished with everything you will want or need 
                                                (washer/dryer, full kitchen, full bath, wifi, tv’s, “man-cave” in the 
                                                garage with a tv and pool table and dart board, huge back deck 
                                                overlooking the 5 acre pond behind the lodge, front porch with 
                                                chairs/table and grills/smokers). 
                                            </li>
                                        </ul>
                                    <li className="whatsincludedlist"> 
                                        Retrieving of game, cleaning/field dressing, caping out and hanging up in our 
                                        private chilled meat locker on site to stay chilled while you stay.
                                    </li>
                                        <ul>
                                            <li className="whatsincludedlist">
                                                We have a top-notch deer tracking dog that had 100% finds on dead deer in 
                                                his first season with us in 2021. He will find them! Free/included to our 
                                                paying clients.
                                            </li>
                                            <li className="whatsincludedlist">
                                                Can also process and bag your meat if requested for an additional charge.
                                            </li>
                                        </ul>
                                    <li className="whatsincludedlist">
                                    All blinds (ground, tower, and pop-up) and tree stands provided and ready for you. 
                                    Also have climbing stands for those who choose to use them. Safety harnesses 
                                    provided; bring your own if you have one you are comfortable with.
                                    </li>
                                </ul>
                            </div>
                            <img className="deerbody1"src={deerbody1} alt="Deer hunting photo1"></img>
                        </div>
                <div className="wherewehuntbox">
                        <img className="deerbody2"src={deerbody2} alt="Deer hunting photo2"></img>
                        <div className="wherewehunt">
                            <p className="wherewehunttitle">Where We Hunt</p>
                            <ul>
                                <li className="wherewehuntlist">
                                    We have 15,000 acres to hunt on very vast and beautiful whitetail terrain
                                </li>
                                <li className="wherewehuntlist">
                                    Our land is in Deer Units 10,11 and 14. Based out of Lydon, KS and spreads out 
                                    in all directions from there
                                </li>
                                <li className="wherewehuntlist">
                                    Right between Melvern and Pomona Lake Reservoirs that hold a very large number of whitetails!
                                </li>
                            </ul>
                        </div>
                </div>
                <div className="availabilitybox">
                    <div className="availability">
                        <p className="availabilitytitle">Availabitlity For 2023</p>
                        <ul>
                            <li className="availabilitylist">
                                Muzzleloader (September 12-25, 2022): second week BOOKED. 2-3 spots available for first week.
                            </li>
                            <li className="availabilitylist">
                                Rifle (November 30-December 11, 2022): opening week BOOKED. VERY limited openings for last week of rifle.
                            </li>
                            <li className="availabilitylist">
                                Archery (September 12-December 31, 2022): Call for availability; filling up fast!
                            </li>
                        </ul>
                    </div>
                        <img className="deerbody3"src={deerbody3} alt="Deer hunting photo3"></img>
                </div>
            <div>   
        </div>
        <footer>
            <Footer/>
        </footer>
    </div>
    
    )
}

export default WhiteTailDeer