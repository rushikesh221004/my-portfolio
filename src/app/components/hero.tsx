import { Button } from "@nextui-org/react";
import myImg from "../assets/images/myImg.jpg"
import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full px-6 justify-center h-full flex flex-col gap-8 items-center">
            <div>
                <div className="h-44 w-44 bg-white rounded-xl overflow-hidden">
                    <Image src={myImg} alt="myImg" className="w-fit h-fit object-cover"/>
                </div>
            </div>
            <div className="w-full flex flex-col gap-3">
                <p className="font-bold text-lg text-center">Hello I'm</p>
                <h1 className="text-center text-3xl font-bold">Rushikesh Manjre</h1>
                <p  className="font-bold text-lg text-center">Web Developer from Khamgaon</p>
                <p className="text-center">Jodi kokhono vul hoye jai tumi oporadh nio na ptate velit esse cillum dolore</p>
                <div className="flex mt-6 items-center gap-4 w-full justify-center">
                    <Button color="primary" className="text-lg font-semibold py-6 w-fit text-white px-6 rounded-full">
                        Get a Quote
                    </Button>

                    <p className="font-semibold text-lg">About Me</p>

                </div>
            </div>
        </div>
    )
}