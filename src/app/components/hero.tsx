import { Button } from "@nextui-org/react";
import myImg from "../assets/images/myImg.jpg"
import Image from "next/image";
import TrophySvg from "../assets/svg/trophy.svg";



export default function Hero() {
    return (
        <div className="w-full px-6 justify-center max-w-[1350px] mx-auto lg:flex-row-reverse lg:justify-between lg:overflow-x-hidden xl:overflow-x-visible h-full flex flex-col gap-8 items-center">
            <div className="lg:relative lg:flex lg:flex-row-reverse lg:w-[480px] 2xl:w-[630px]">
                <div className="hidden lg:block">
                    <div className="w-28 rounded-xl top-[-12%] h-28 flex xl:top-[-5%] items-center justify-center absolute right-[-8%] bg-white overflow-hidden py-4 px-4">
                        <Image src={TrophySvg} alt="TrophySvg" className="w-14 object-cover" />
                    </div>
                    <div className="bg-white w-40 2xl:w-52 top-[16%] py-4 rounded-xl px-4 absolute left-0 text-black">
                        <div className="flex">
                            <h2 className="text-sky-300 tracking-[-4px] text-5xl 2xl:text-6xl font-bold">1</h2>
                            <h2 className="text-sky-300 text-5xl 2xl:text-6xl font-bold">2</h2>
                            <div className="ml-2 flex items-center">
                                <p className="text-md text-end 2xl:text-xl leading-[20px] font-bold">Years of <br /> Success</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white w-fit bottom-[7%] right-[-20%] py-4 rounded-xl px-4 absolute text-black">
                        <div className="flex">
                            <h2 className="text-red-400 tracking-[-1px] text-5xl font-bold">800</h2>
                            <span className="text-red-400 font-extrabold text-3xl">+</span>
                            <div className="ml-2 flex items-center">
                                <p className="text-md leading-[20px] font-bold">Projects <br /> Completed</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="h-44  w-44 lg:h-[380px] lg:w-[380px] 2xl:h-[550px] 2xl:w-[550px] bg-white rounded-xl overflow-hidden">
                    <Image src={myImg} alt="myImg" className="w-fit h-fit object-cover 2xl:h-[550px] 2xl:w-[550px]" />
                </div>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-3 2xl:gap-8">
                <p className="font-bold lg:text-3xl 2xl:text-4xl lg:text-start text-lg text-center">Hello I'm</p>
                <h1 className="text-center lg:text-6xl lg:text-start text-3xl 2xl:text-7xl font-bold">Rushikesh Manjre</h1>
                <p className="font-bold lg:text-2xl lg:text-start text-lg text-center">Web Developer from Khamgaon</p>
                <p className="text-center lg:text-xl lg:text-start">Jodi kokhono vul hoye jai tumi oporadh nio na ptate velit esse cillum dolore</p>
                <div className="flex mt-6 items-center 2xl:gap-11 lg:justify-start gap-4 w-full justify-center">
                    <Button color="primary" className="text-lg font-semibold 2xl:text-xl py-6 w-fit text-white px-6 rounded-full">
                        Get a Quote
                    </Button>

                    <p className="font-semibold text-lg 2xl:text-xl">About Me</p>

                </div>
            </div>
        </div>
    )
}