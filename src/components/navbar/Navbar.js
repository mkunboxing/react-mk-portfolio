import React from 'react'
import { logo } from '../../assets/index'
import { navLinksdata } from '../../constants'
import { Link } from 'react-scroll'


const Navbar = () => {
    return (
        <div className='w-full h-24 mx-auto flex justify-between items-center font-titleFont border-b-[2px] border-b-gray-600'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <ul className='flex gap-10 items-center'>
                    {
                        navLinksdata.map(({_id,title,link})=>(
                            <li
                            className='text-base font-normal text-gray-400 tracking-wide cursor-pointer
                            hover:text-designColor duration-400'
                             key={_id}>
                                <Link activeClass='active'
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >{title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
}

export default Navbar