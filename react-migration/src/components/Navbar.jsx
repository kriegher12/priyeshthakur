import React from 'react'

const Navbar = () => {
  return (
    <div>
            <ul className=" text-[#000000]  uppercase text-[14px] font-medium flex p-4 flex-row gap-3 justify-center items-center">
                <li ><a href="#narrative">Narrative</a></li>
                <li><a href="#music-videos">Music Videos</a></li>
                <li><a href="#commercials">Commercials</a></li>
                <li><a href="#info">Info</a></li>
                <li><a href="#stills">Stills</a></li>
            </ul>
       
    </div>
  )
}

export default Navbar
