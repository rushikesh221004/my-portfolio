/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import yellowBoy from "../assets/images/yellowBoy.jpg"
import { Button } from "@nextui-org/react";
import wordpress from "../assets/svg/wordpress.svg"
import graphicSymbol from "../assets/svg/graphicSymbol.svg"
import gamingMan from "../assets/images/gamingMan.jpg"
import colorBond from "../assets/svg/colorBond.svg"
import road from "../assets/svg/road.svg"
export default function iAmDeveloper() {
    return (
        <div className="w-full px-4 flex flex-col 2xl:gap-5 2xl:w-[1490px] 2xl:mx-auto lg:items-center lg:flex-row mb-28 lg:flex">

            <div className="w-full lg:w-[500px] xl:h-[380px] xl:w-[700px] relative flex justify-end">
                <div className="hidden lg:block">
                    <div className="w-24 rounded-xl top-[-12%] h-24 flex items-center justify-center absolute xl:top-[-12%] right-[-5%] bg-[#007095] overflow-hidden">
                        <Image src={wordpress} alt="wordpress" className="absolute w-14 text-white" />
                    </div>
                    <div className="w-16 rounded-xl top-[15%] h-16 flex 2xl:left-[-5%] 2xl:top-[25%] items-center justify-center absolute xl:left-[13%] left-[5%] bg-[#FB503B] overflow-hidden">
                        <Image src={road} alt="road" className="absolute w-10 text-white" />
                    </div>
                    <div className="w-24 rounded-xl bottom-[5%] 2xl:bottom-[-40%] 2xl:left-[50%] xl:bottom-[-5%] h-24 flex items-center justify-center absolute left-[62%] bg-[#007095] overflow-hidden">
                        <Image src={graphicSymbol} alt="graphicSymbol" className="absolute w-14 text-white" />
                    </div>
                    <div className="rounded-xl bottom-[1%] absolute 2xl:bottom-[-60%] xl:bottom-[-10%] 2xl:left-[-20%] xl:left-[14%] left-[3%]">
                        <div className="w-20 rounded-xl top-[18%] h-20 flex items-center justify-center absolute left-[-15%] bg-[#3B383F] overflow-hidden">
                            <Image src={colorBond} alt="road" className="absolute w-10 text-white" />
                        </div>
                        <Image src={gamingMan} alt="gamingMan" className="object-cover w-52 2xl:w-96 xl:w-64 rounded-xl" />
                    </div>
                </div>
                <div className="lg:h-80 xl:w-[450px] w-full 2xl:w-[600px] 2xl:h-[500px] lg:w-80">
                    <Image src={yellowBoy} alt="yellowBoy" className="rounded-xl w-full object-cover" />
                </div>
            </div>
            <div className="flex flex-col gap-8 mt-6 lg:w-1/2 2xl:w-[800px] lg:px-12">
                <div>
                    <p className="text-[#FB503B] 2xl:text-xl font-medium 2xl:font-semibold text-lg">I'm a Developer</p>
                    <h2 className="text-3xl font-semibold 2xl:font-bold 2xl:text-5xl">I Develop Application that Help People</h2>
                </div>
                <p className="text-gray-400 2xl:text-lg 2xl:font-medium">Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat cupidatat</p>
                <p className="text-gray-400 2xl:text-lg font-medium">Krnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis</p>
                <Button className="bg-[#142EB5] 2xl:py-7 2xl:px-9 2xl:text-lg hover:bg-[#FB503B] font-semibold text-md rounded-full px-7 py-4 w-fit ">View Portfolio</Button>
            </div>
        </div>
    )
}
