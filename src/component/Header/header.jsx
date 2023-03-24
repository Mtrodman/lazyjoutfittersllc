import './header.css'
import lazyjlogo from '../../assets/images/lazyjlogo.jpg'
import mainheader from '../../assets/images/mainheader.jpg'

function Header() {
    return (
        <div>
            <div className="headerCard">
                <img className="mainheaderlogo"src={mainheader} alt="Main Logo"></img>
            <div className="guidedHunts">
                <h2 className="guidetitle">Guided Trophy Hunts</h2>
                    <p className="guidetext">
                    Lazy J Outfitters is a small family owned and operated Kansas Trophy whitetail deer and
                     Kansas Spring turkey hunting operation. Lazy J Outfitters offers guided waterfowl hunting 
                     and guided catfishing also. Guided and non-guided hunts for Kansas Trophy deer and Kansas 
                     Spring Turkey. Lazy J Outfitters is owned and operated by Gene Roberts and Emilee Burkett; 
                     husband and wife.
                    </p>
                    {/* <button className='button'>Book A Hunt</button> */}
            </div>
            <div className="lazyJlogo">
                <img className="mainLogo"src={lazyjlogo} alt="Lazy J Outfitters Logo"></img>
            </div>
            
            </div>
            
              
        </div>
        
    )
}

export default Header