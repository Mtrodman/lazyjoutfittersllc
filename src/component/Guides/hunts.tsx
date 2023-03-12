import './hunts.css'
import deer from '../../assets/images/deer.jpg'
import turkey from '../../assets/images/turkey.jpg'


function GuidedHunts() {
    return (
        <div className="guidedHuntsCard">
            <div className="guidedWhiteTail">
                < img className ="deer" src={deer} alt="Deer Hunts Image"></img>
                    <h3>WhiteTail Deer Hunt</h3>
                        <ul>
                            <li>6-Day hunts for $3,500.</li>
                            <li>Customized hunts also available.</li>
                            <li>Lodging & meals included.</li>
                        </ul>
                            <button className="deerButton">DEER HUNTS</button>
            </div>
            <div className="guidedTurkey">
                < img className="turkey"src={turkey} alt="Turkey Hunt Image"></img>
                    <h3>Turkey Hunts</h3>
                        <ul>
                            <li>3-Day hunt for $800/person.</li>
                            <li>Customized hunts available.</li>
                            <li>Cleaning & bagging included.</li>
                        </ul>
                             <button className="turkeyButton">TURKEY HUNTS</button>
            </div>
            <div className="guidedWaterfowl">
                < img src="" alt="Waterfowl Hunts Image"></img>
                     <h3>Waterfowl Hunts</h3>
                        <ul>
                            <li>$200 per day.</li>
                            <li>Customized hunts available.</li>
                            <li>Hunting ducks & geese.</li>
                        </ul>
                             <button className="waterFowlButton">Waterfowl Hunts</button>
            </div> 
        </div>
    )
}

export default GuidedHunts