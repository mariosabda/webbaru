import React from "react";

const Awards = () => {
    return (
        <div className="bg-gray-200" id="awards">
            <h1 className="text-center md:text-4xl sm:text-2xl text-xl font-semibold pt-4">Trophy & Awards</h1>
            <div className="flex flex-col justify-center">
                <a href="https://www.instagram.com/p/Cj-ozEnyc10/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                className="font-medium pl-10 my-6 py-3 transition transform hover:scale-300 hover:underline hover:text-[#FF204E] duration-300">
                    |FTBI|
                </a>
                <a href="https://www.instagram.com/p/Cgdhu3ArStj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                className="font-medium pl-10 my-6 py-3 transition transform hover:scale-300 hover:underline hover:text-[#FF204E] duration-300">
                    |FLS2N|
                </a>
                <a href="https://youtu.be/Txw5Ba2R7n4?si=dEuRzKPBSKV_yMEu" 
                className="font-medium pl-10 my-6 py-3 transition transform hover:scale-300 hover:underline hover:text-[#FF204E] duration-300">
                    |PESPARANI Nasional 1|
                </a>
            </div>
        </div>
    )
}

export default Awards