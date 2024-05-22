import React from 'react'
import { Link } from 'react-router-dom'
 import '../App.css'
export default function NavBar() {
  return (

<div>
<nav className='header'>

    <ul>
        <li> <Link className='nav_link'   to={''}>Home</Link></li>
        <li> <Link className='nav_link'   to={'about'}>About</Link></li>
        <li> <Link className='nav_link'   to={'employee'}>Employee</Link></li>
         <li> <Link  className='nav_link' to={'department'}>Department</Link></li>
        
    </ul>

   
   
</nav>

</div>



    
  )
}
