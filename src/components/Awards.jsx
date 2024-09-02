import React from "react";

const Awards = () => {
    return (
        <div className="bg-black text-white" id="awards">
            <h1 className="text-center md:text-4xl sm:text-2xl text-xl font-normal pt-4">Trophy & Awards</h1>
            <div className="flex flex-col justify-center">
                <span className="font-light pl-10 my-6 py-3">
                [National] <a className="hover:underline text-[#FF204E] duration-300" href="https://youtu.be/Txw5Ba2R7n4?si=dEuRzKPBSKV_yMEu" >Golden Medalist at Pesta Paduan Suara Gerejani Nasional 1(PESPARANINAS 1)</a> Gregorian Teenagers Choir
                </span>
                <span className="font-light pl-10 my-6 py-3">
                [District] <a className="hover:underline text-[#FF204E] duration-300" href="https://www.instagram.com/p/Cj-ozEnyc10/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" >1st Place at Festival Bulan Bahasa (FTBI)</a> in Macapat Competition (male category)
                </span>
                <span className="font-light pl-10 my-6 py-3">
                [District] <a className="hover:underline text-[#FF204E] duration-300" href="https://www.instagram.com/p/Cgdhu3ArStj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" >Festival dan Lomba Seni Siswa Nasional (FLS2N)</a> Solo Vocal
                </span>
            </div>
        </div>
    )
}

export default Awards