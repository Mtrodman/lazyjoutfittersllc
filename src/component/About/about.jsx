
import './about.css'
import gene from '../../assets/images/gene.jpeg'
import emilee from '../../assets/images/emilee.jpeg'
import lazymap from '../../assets/images/lazymap.PNG'


function About() {
    return (
        <div className="headerCard">
            <div className='aboutbox'>
                <p className="abouttext">
                Gene and Emilee at Lazy J Outfitters are all about successful hunting, healthy and abundant 
                wildlife, hearty meals, good times and conversations with plenty of laughs at the end of the
                 day, treating everyone like they are family and hoping to make life long friends. They 
                 love the outdoors and good times with good people. They know their land and their wildlife; 
                 and they have ample amounts of that. Gene and Emilee are some of the most down to earth and genuine 
                 good-hearted people you’ll ever meet or hunt with. They are just like you, they crave the chase, the 
                 rut, the thundering-gobblers and the true hard work and dedication it takes to harvest a true monster.
                Gene and Emilee have 15,000 acres to hunt on in two different counties; all of which is very diverse 
                land; crop ground, hay meadows, pasture land, creek timber, and a 5 acre private fishing lake right next
                 to the cabin. Guaranteed some of the best people and land you’ll every hunt on or with.
                </p>
                < img className="gene"src={gene} alt="Gene"></img>
            </div>
            <div className="lazymapbox">
                < img className="lazymap"src={lazymap} alt="Lazy J Outfitters Map"></img>
                < img className="emilee"src={emilee} alt="emilee"></img>

            </div>

            <div>
             
            </div>
        </div>
    )
}

export default About