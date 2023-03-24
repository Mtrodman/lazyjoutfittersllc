import './lodging.css'
import Footer from '../Footer/footer'

function Lodging() {
    return (
      <div>
            <div className="lodgingheaderCard">
                <p className="lodgingtitle">Lazy J Lodging</p>
            </div>
            <div className="Lodgingtextbox">
                <p className="lodgingtextbox1">
                    Relax, play games or enjoy the big game! The Lazy J Lodge is perfect for gathering after the hunt.
                </p>
                <p  className="lodgingtextbox2">
                Whether it’s gathering around the kitchen telling hunting stories, watching the big game, 
                or just relaxing in your room after a long day’s hunt – we want your experience indoors to 
                be just as great as the outdoors.
                </p>
            </div>
            <div className="Features">
                <h3 className="featuresheader">Features Included</h3>
                    <ul>
                        <li className="featureinfo">Two Tv's & Wifi</li>
                        <li className="featureinfo">Pool Table & Dart Board</li>
                        <li className="featureinfo">Full Kitchen & Bathroom</li>
                        <li className="featureinfo">Washer & Dryer</li>
                        <li className="featureinfo">2 Bedrooms with bunkbeds</li>
                        <li className="featureinfo">Sleeps 4-6 people</li>
                        <li className="featureinfo">Outdoor patio with fire pit and grill</li>
                        <li className="featureinfo">Chilled and enclosed butcher room for processing meat</li>
                    </ul>
            </div> 
            <div className="footer">
                <Footer/>
            </div>
      </div>
    )
}

export default Lodging