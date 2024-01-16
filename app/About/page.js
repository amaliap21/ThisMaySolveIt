import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className="flex relative min-h-screen flex-col overflow-hidden items-center justify-start gap-14 lg:pb-28 2xl:pb-40 bg-neutral-50 z-[0]">
      <div className="flex justify-center w-full py-20 pb-44" style={{ background: "linear-gradient(180deg, #D4D4D5 65.1%, rgba(212, 212, 213, 0.00) 100%)" }}>
        <h1 className="text-black text-center font-pt_sans text-[30px] lg:text-3xl font-bold italic ">We’re just helping everyone to create an impact</h1>
      </div>

      {/* ABOUT US */}
      <div className="flex flex-col gap-10 z-[1] p-10 sm:px-20 md:px-24 lg:px-20 2xl:px-32">
        <h2 className="text-black text-center font-pt_sans text-[30px] lg:text-3xl font-bold">About Us</h2>
        <p className="text-black text-center font-pt_sans text-[30px] lg:text-xl w-2/3 mx-auto">Sunt autem, qui dicant foedus esse quoddam sapientium, ut ne minus amicos quam se ipsos diligant. quod et posse fieri intellegimus et saepe etiam videmus, et perspicuum est nihil ad iucunde vivendum reperiri posse, quod coniunctione tali sit aptius</p>
      </div>

      {/* OUR TEAM */}
      <div className="flex flex-col gap-14 z-[1] p-10 sm:px-20 md:px-24 lg:px-20 2xl:px-32">
        <h2 className="text-black text-center font-pt_sans text-[30px] lg:text-3xl font-bold">Our Team</h2>
        <div className="flex flex-col sm:flex-row gap-24">
          {/* Person-1 */}
          <div className="grid grid-rows place-items-center">
            <Image
              src="/ellipse-1.png"
              alt="person 1"
              width={200}
              height={200}
              className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] z-[2] hover:cursor-pointer"
            ></Image>
            <h3 className="mt-10 text-black font-pt_sans text-[30px] lg:text-xl">John Doe</h3>
            <p className="text-black font-pt_sans text-[30px] lg:text-xl">Product Manager</p>
          </div>

          {/* Person-2 */}
          <div className="grid grid-rows place-items-center">
            <Image
              src="/ellipse-2.png"
              alt="person 2"
              width={200}
              height={200}
              className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] z-[2] hover:cursor-pointer"
            ></Image>
            <h3 className="mt-10 text-black font-pt_sans text-[30px] lg:text-xl">Maria</h3>
            <p className="text-black font-pt_sans text-[30px] lg:text-xl">UI/UX Designer</p>
          </div>

          {/* Person-3 */}
          <div className="grid grid-rows place-items-center">
            <Image
              src="/ellipse-3.png"
              alt="person 3"
              width={200}
              height={200}
              className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] z-[2] hover:cursor-pointer"
            ></Image>
            <h3 className="mt-10 text-black font-pt_sans text-[30px] lg:text-xl">Chiang Lee</h3>
            <p className="text-black font-pt_sans text-[30px] lg:text-xl">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </main>
  )
}
export default About;