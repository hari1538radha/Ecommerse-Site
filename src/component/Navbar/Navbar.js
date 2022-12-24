import React from 'react';
//Image import
import Logo from "../Images/FOOTER.svg"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
        <div>
            <img src={Logo} alt="logo">
            </img>
        </div>
        <div className='flex gap-x-24'>
            <a href="#">Home</a>
            <a href="#">Sneaker</a>
            <a href="#">Contact</a>
        </div>
    </div>
  )
}

export default Navbar