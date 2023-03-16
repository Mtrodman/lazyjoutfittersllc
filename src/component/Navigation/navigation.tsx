import { useState } from 'react';
import { Link} from 'react-router-dom'
import  './navigation.css'
import lazyjlogo from '../../assets/images/lazyjlogo.jpg'



function Navigation() {

   

  return (
    <header className='header'>
      <div>
      <Link className='logo' to='/'><img src={lazyjlogo} alt="" /></Link>
      </div>
      <ul className='list'>
            <li>
              <Link className='nav n1' to='/About'>
                About
              </Link>
            </li>
            
            <li>
              <Link className='nav n1' to='/Lodging'>
                Lodging
              </Link>
            </li>
            <li>
              <Link className='nav n1' to='/Contact'>
               Contact
              </Link>
            </li>
            <li>
              <Link className='nav n1' to='/WhitetailDeer'>
               Whitetail Deer 
              </Link>
            </li>
            <li>
              <Link className='nav n1' to='/Turkey'>
               Turkey
              </Link>
            </li>
            <li>
              <Link className='nav n1' to='/Waterfowl'>
               Waterfowl
              </Link>
            </li>
            
           
           
      </ul>
     
   
    </header>
  )
}

export default Navigation

