import React from "react";
import Bw from "../assets/BW.png";
import Smanaga from "../assets/SMANAGA.png";

const Newsletter = () => {
    return (
        <div className="w-full py-16 text-white" id="study">
            <div className="max-w-[1240px] mx-auto grid lgrid-cols-3">
                <div>
                    <h1 className="md:text-4xl sm:text-2xl text-md font-bold py-2 pl-4">Study, Hardwork, and Result</h1>
                    <p className="pl-6 max-w-[900px] italic">
                    Mario’s done with middle school and now he's hitting up high school.
                    Mario attended middle school at Bentara Wacana Middle School in Muntilan, 
                    and he is now striving to complete his high school education at SMA Negeri 3 Magelang. 
                    With a strong interest in learning, Mario is able to dedicate his time and effort to creating this website.
                    </p>
                    <div className="flex justify-center items-center space-x-8 pt-4">
                        <div className="flex flex-col items-center">
                            <img className="w-[100px] transition transform hover:scale-110 duration-300" src={Bw} alt="/" />
                            <a href="https://www.instagram.com/sperana_bewe/" className="text-white w-[200px] rounded-md font-medium mx-auto my-5 py-3 hover:underline hover:text-[#FF204E] text-center">SMP Bentara Wacana</a>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-[63px] transition transform hover:scale-110 duration-300" src={Smanaga} alt="/" />
                            <a href="https://www.instagram.com/admin_smanaga/" className="text-white w-[200px] rounded-md font-medium mx-auto my-6 py-3 hover:underline hover:text-[#FF204E] text-center">SMA Negeri 3 Magelang</a>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Newsletter;