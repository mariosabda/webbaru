import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { TbEaseInOut } from "react-icons/tb";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll"
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        setOpen(!isOpen)
    };

    return (
        <div className="flex justify-between items-center h-20 px-4 text-white sticky top-0 z-50 bg-black">
            <img className="w-[70px] h-[70px] mt-2" src={Logo}/>
            <ul className="hidden md:flex">
                <Link to="profile" smooth={true} duration={500} offset={-65}>
                    <button className="p-4 hover:text-[#ff204e]">Profile</button>
                </Link>
                <Link to="study" smooth={true} duration={500} offset={-100}>
                    <button className="p-4 hover:text-[#ff204e]">Study</button>
                </Link>
                <Link to="partner" smooth={true} duration={500} offset={-60}>
                    <button className="p-4 hover:text-[#ff204e]">Partner</button>
                </Link>
                <Link to="awards" smooth={true} duration={500} offset={-155}>
                    <button className="p-4 hover:text-[#ff204e]">Awards</button>
                </Link>
                <Link to="home" smooth={true} duration={500}>
                    <button className="p-4 hover:text-[#ff204e]">Home</button>
                </Link>
            </ul>
        <div className="md:hidden">
            <Hamburger toggled={nav} toggle={handleNav} />
        </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500" : "fixed left-[-100%] top-0 h-full ease-in-out duration-500"}>
                <h1 className="w-full text-3xl font-bold text-[#982B1C] m-4">Beranda</h1>
                <ul className="uppercase">
                    <li className="p-4 border-b border-gray-600"><Link to="profile" smooth={true} duration={500}>Profile</Link></li>
                    <li className="p-4 border-b border-gray-600"><Link to="study" smooth={true} duration={500}>Study</Link></li>
                    <li className="p-4 border-b border-gray-600"><Link to="partner" smooth={true} duration={500}>Partner</Link></li>
                    <li className="p-4 border-b border-gray-600"><Link to="awards" smooth={true} duration={500}>Awards</Link></li>                   
                    <li className="p-4"><Link to="home" smooth={true} duration={500}>Home</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;