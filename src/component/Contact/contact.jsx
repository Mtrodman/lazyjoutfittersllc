import './contact.css'
import lazyjlogo from '../../assets/images/lazyjlogo.jpg'

function Contact() {
    return (
        <div className="headerCard">
            <div className="guidedHunts">
                <h2>Guided Trophy Hunts</h2>
                    <p>
                    Lazy J Outfitters is a small family owned and operated Kansas Trophy whitetail deer and
                     Kansas Spring turkey hunting operation. Lazy J Outfitters offers guided waterfowl hunting 
                     and guided catfishing also. Guided and non-guided hunts for Kansas Trophy deer and Kansas 
                     Spring Turkey. Lazy J Outfitters is owned and operated by Gene Roberts and Emilee Burkett; 
                     husband and wife.
                    </p>
            </div>
            <div className="lazyJlogo">
                <img className="mainLogo"src={lazyjlogo} alt="Lazy J Outfitters Logo"></img>
            </div>
        </div>
    )
}

export default Contact