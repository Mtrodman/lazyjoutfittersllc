import './footer.css'

function Footer() {
    return (
       <div className="footerCard">
            <div className="ourAddress">
                <h3 className="footerheaders">Our Address</h3>
                    <p className="footertext">
                        1760 W. 245th St.
                        Lyndon, KS 66451
                    </p>
            </div>
            <div className="reservations">
                <h3 className="footerheaders">Reservations</h3>
                    <p className="footertext">
                        (785) 766-4435
                        (785) 220-0525
                    </p>
            </div>
            <div className="openAllYear">
                <h3 className="footerheaders">Open All Year</h3>
                        <p className="footertext">
                        lazyjoutfittersllc@gmail.com
                        </p>
            </div>
       </div>
    )
}

export default Footer