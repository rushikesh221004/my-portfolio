import { Button } from "@nextui-org/react";
import myImg from "../assets/images/myImg.jpg"
import Image from "next/image";
import TrophySvg from "../assets/svg/trophy.svg";



export default function Hero() {
    return (
        <div className="w-full px-6 justify-center lg:flex-row-reverse lg:justify-between h-full flex flex-col gap-8 items-center">
            <div className="lg:bg-yellow-300 lg:relative lg:flex lg:flex-row-reverse lg:w-[480px]">
                <div className="hidden lg:block">
                    <div className="w-28 rounded-xl top-[-12%] h-28 flex items-center justify-center absolute right-[-8%] bg-white overflow-hidden py-4 px-4">
                        <Image src={TrophySvg} alt="TrophySvg" className="w-14 object-cover"/>
                    </div>
                    <div className="bg-white w-40 top-[16%] py-4 rounded-xl px-4 absolute left-0 text-black">
                        <div className="flex">
                            <h2 className="text-sky-300 tracking-[-4px] text-5xl font-bold">1</h2>
                            <h2 className="text-sky-300 text-5xl font-bold">2</h2>
                            <div>
                                <p className="text-md text-end font-bold">Years of Success</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-44  w-44 lg:h-[380px] lg:w-[380px] bg-white rounded-xl overflow-hidden">
                    <Image src={myImg} alt="myImg" className="w-fit h-fit object-cover" />
                </div>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-3">
                <p className="font-bold lg:text-3xl lg:text-start text-lg text-center">Hello I'm</p>
                <h1 className="text-center lg:text-6xl lg:text-start text-3xl font-bold">Rushikesh Manjre</h1>
                <p className="font-bold lg:text-2xl lg:text-start text-lg text-center">Web Developer from Khamgaon</p>
                <p className="text-center lg:text-xl lg:text-start">Jodi kokhono vul hoye jai tumi oporadh nio na ptate velit esse cillum dolore</p>
                <div className="flex mt-6 items-center lg:justify-start gap-4 w-full justify-center">
                    <Button color="primary" className="text-lg font-semibold py-6 w-fit text-white px-6 rounded-full">
                        Get a Quote
                    </Button>

                    <p className="font-semibold text-lg">About Me</p>

                </div>
            </div>
        </div>
    )
}