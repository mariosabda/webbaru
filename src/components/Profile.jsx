import React from "react";
import Sunset from "../assets/sunset.jpg"

const Profile = () => {
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
                </div>
            </div>
        </div>
    )
}

export default Profile