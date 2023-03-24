import React, {useState} from "react";
import Axios from 'axios'
import Footer from '../Footer/footer'

function Regpage() {

    const [user_name, setUser_name] = useState('')
    const [user_password, setUser_password] = useState('')

    const Login = async () => {
        await Axios.post('http://localhost:5000/login', {
           
            user_name: user_name, 
            user_password: user_password
        }).then((response)=>{
            // console.log(response);
        })
    }

    return (
      <div >
        <div className="RegistrationForm">
            <h1 className="Registrationtitle">Registration</h1>
            <label>Username</label>
            <input type="text" onChange={(e) => {
                setUser_name(e.target.value);
            }}/>
            <label>Password</label>
            <input type="text" onChange={(e) => {
                setUser_password(e.target.value);
            }}/>
            <button onClick={Login}>Register</button>
        </div>
        <div className="Loginform">
            <h1 className="LoginTitle">Login</h1>
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Password"/>
            <button>Login</button>
        </div>
        <Footer/>
      </div>
    )
}

export default Regpage