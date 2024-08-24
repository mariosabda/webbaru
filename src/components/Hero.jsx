import React from "react"
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#FF204E] font-semibold p-2">PROUDLY PRESENT</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">MSK.ID</h1>
                <div className="flex justify-center items-center">
                    <div className="flex items-center">
                    <p className="md:text-6xl sm:text-5xl text-xl font-bold">I'm</p>
                <br />
                <ReactTyped className="md:text-6xl sm:text-5xl text-xl font-bold pl-2 text-[#FF204E]"
                    strings={['an engineer', 'Sperana 48', 'MHS 27', 'Mario Sabda Karuna']}
                    typeSpeed={80}
                    backSpeed={100}
                    loop
                    />
                </div>
            </div>
        <Link to="profile" smooth={true} duration={500} offset={-65}>
            <button className="bg-[#FF204E] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-white hover:text-[#FF204E]">Know Me More</button>
        </Link>
        </div>
    </div>
    )
}

export default Hero