import { useState } from 'react';
import { Link, Route} from 'react-router-dom'
import  './navigation.css'
import lazyjlogo from '../../assets/images/lazyjlogo.jpg'



function Navigation() {

   

  return (
    <header className='header'>
      <div>
      <Link className='mainlogo' to='/'><img src={lazyjlogo} alt="" /></Link>
      </div>
      <ul className='list'>
            <li className='buttonlink'>
              <Link className='nav n1' to='/About'>
                About
              </Link>
            </li>
            
            <li className='buttonlink'>
              <Link className='nav n1' to='/Lodging'>
                Lodging
              </Link>
            </li>
            <li className='buttonlink'>
              <Link className=' nav n1' to='/Contact'>
               Contact
              </Link>
            </li>
            <li className='buttonlink'>
              <Link className=' nav n1' to='/WhitetailDeer'>
               Whitetail Deer 
              </Link>
            </li>
            <li className='buttonlink'>
              <Link className='nav n1' to='/Turkey'>
               Turkey
              </Link>
            </li>
            <li className='buttonlink'>
              <Link className=' nav n1' to='/Waterfowl'>
               Waterfowl
              </Link>
            </li>
            <li className='buttonlink'>
              <Link className=' nav n1' to='/LoginForms'>
               Login
              </Link>
            </li>
             <li className='buttonlink'>
              <Link className=' nav n1' to='/SignUpForm'>
               Register
              </Link>
            </li>             
                          
           
      </ul>
     
   
    </header>
  )
}

export default Navigation

