import React from "react";
import Sunset from "../assets/sunset.jpg"

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] h-[500px] mx-auto my-4 rounded-full object-cover object-cover object-center" src={Sunset} alt="/" />
                <div className="flex flex-col justify-center px-4" id="profile">
                    <p className="font-bold pt-2 ">INTRODUCTION</p>
                    <h1 className="md:text-6xl sm:text-4xl text-xl font-semibold underline decoration-2 pb-2">
                        <a href="https://www.instagram.com/mariosabda_/" className="hover:text-[#FF204E]">Mario</a> Sabda Karuna
                    </h1>
                    <p className="italic">
                        or who is often called Mario is a talented teenager.
                        Mario has expertise in art and computers.
                        Mario has participated in many competitions, including OSN Mathematics, choir, and solo vocal.
                    </p>
                <div className="flex flex-row justify-center">
                    <a href="https://www.instagram.com/p/Cj-ozEnyc10/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                    className="font-medium mx-auto my-6 py-3 transition transform hover:scale-110 hover:underline hover:text-[#FF204E] duration-300 text-center">
                        FTBI
                    </a>
                    <a href="https://www.instagram.com/p/Cgdhu3ArStj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                    className="font-medium mx-auto my-6 py-3 transition transform hover:scale-110 hover:underline hover:text-[#FF204E] duration-300 text-center">
                        FLS2N
                    </a>
                    <a href="https://youtu.be/Txw5Ba2R7n4?si=dEuRzKPBSKV_yMEu" 
                    className="font-medium mx-auto my-6 py-3 transition transform hover:scale-110 hover:underline hover:text-[#FF204E] duration-300 text-center">
                        PESPARANI Nasional 1
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics