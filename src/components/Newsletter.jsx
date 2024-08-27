import React from "react";
import Bw from "../assets/BW.png";
import Smanaga from "../assets/SMANAGA.png";

const Newsletter = () => {
    return (
    <div className="w-full py-10 text-white" id="study">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 gap-8 px-4">
            <div>
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold py-2">
                Study, Hardwork, and Result
            </h1>
            <p className="pl-2 sm:pl-4 md:pl-6 lg:pl-8 italic text-sm sm:text-base md:text-lg lg:text-xl">
                Mario’s done with middle school and now he's hitting up high school.
                Mario attended middle school at Bentara Wacana Middle School in Muntilan, 
                and he is now striving to complete his high school education at SMA Negeri 3 Magelang. 
                With a strong interest in learning, Mario is able to dedicate his time and effort to creating this website.
            </p>
            </div>
            <div className="flex flex-col items-center lg:flex-row justify-center lg:space-x-8">
            <div className="flex flex-col items-center text-center">
                <img
                className="w-[80px] sm:w-[100px] lg:w-[120px] transition transform hover:scale-110 duration-300 md:text-red"
                src={Bw}
                alt="SMP Bentara Wacana"
                />
                <a
                href="https://www.instagram.com/sperana_bewe/"
                className="text-white w-[150px] sm:w-[200px] lg:w-[250px] rounded-md font-medium mx-auto my-5 py-3 hover:underline hover:text-[#FF204E] text-sm sm:text-base lg:text-lg"
                >
                SMP Bentara Wacana
                </a>
            </div>
            <div className="flex flex-col items-center text-center mt-6 lg:mt-0">
                <img
                className="w-[50px] sm:w-[63px] lg:w-[80px] transition transform hover:scale-110 duration-300"
                src={Smanaga}
                alt="SMA Negeri 3 Magelang"
                />
                <a
                href="https://www.instagram.com/admin_smanaga/"
                className="text-white w-[150px] sm:w-[200px] lg:w-[250px] rounded-md font-medium mx-auto my-5 py-3 hover:underline hover:text-[#FF204E] text-sm sm:text-base lg:text-lg"
                >
                SMA Negeri 3 Magelang
                </a>
            </div>
            </div>
        </div>
    </div>



    )
}

export default Newsletter;