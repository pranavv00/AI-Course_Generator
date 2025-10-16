import React from 'react'
import Image from 'next/image'
import { IoHomeOutline } from "react-icons/io5";
import { GoStack } from "react-icons/go";
import { GrUpgrade } from "react-icons/gr";
import { IoMdLogOut } from "react-icons/io";

function SideBar() {
    const Menu = [
        {
            id:1,
            name:'Home',
            icon: <IoHomeOutline />,
            path: '/dashboard'
        },
        {
            id:1,
            name:'Explore',
            icon: <GoStack />,
            path: '/dashboard'
        },
        {
            id:1,
            name:'Upgrade',
            icon: <GrUpgrade />,
            path: '/dashboard'
        },
        {
            id:1,
            name:'Logout',
            icon: <IoMdLogOut />,
            path: '/dashboard'
        },
    ]
  return (
    <div className = ' fixed h-full md:w-64 p-5 shadow-md'>
        <Image src = {'/image.png'} width= {160} height= {120}/>
        <ul>
            {Menu.map((item, index)=>(
                <div>
                    <div>
                        {item.icon}
                    </div>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default SideBar