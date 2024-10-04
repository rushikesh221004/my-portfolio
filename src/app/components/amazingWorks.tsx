import Image from "next/image"
import youtube from "../assets/images/youtube.jpg"
import { Button } from "@nextui-org/react"
import { FaArrowRight } from "react-icons/fa";
import vimeo from "../assets/images/vimeo.jpg"
import soundcloud from "../assets/images/soundcloud.jpg"
import details from "../assets/images/details.jpg"
export default function amazingWorks() {
    const cardSocial = [
        {
            social: "Youtube",
            img: youtube
        },
        {
            social: "Vimeo",
            img: vimeo
        },
        {
            social: "SoundCloud",
            img: soundcloud
        },
        {
            social: "Details",
            img: details
        }
    ]
    return (
        <div className="w-full px-4">
            <div className="w-full flex flex-col gap-3">
                <p className="text-xl font-medium text-center text-orange-600">Portfolio</p>
                <h1 className="text-2xl font-semibold text-center">My Amazing Works</h1>
                <p className="text-gray-400 text-center font-semibold">Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate</p>
            </div>
            <div className="flex flex-col gap-16 mt-16">
                {
                    cardSocial.map((social, index) => (

                        <div key={index} className="w-full relative h-80 rounded-2xl bg-yellow-200 overflow-hidden">
                            <div className={`absolute ${index==0&&"top-1/2 px-4 -translate-y-[50%]"} ${index==2&&"top-1/2 px-4 -translate-y-[50%]"} ${index==1&&"top-1/2 left-1/2 -translate-y-[50%] translate-x-[-50%] px-0"} ${index==3&&"top-1/2 left-1/2 -translate-y-[50%] translate-x-[-50%] px-0"}`}>
                                <p className="font-medium text-orange-600">{social.social}</p>
                                <h1 className="text-2xl font-semibold">Web Application for Desiverse</h1>
                                <Button className="bg-transparent text-[13px] font-bold flex items-center border-none px-0 w-fit">VIEW PROJECT <FaArrowRight className="text-orange-600 font-extrabold" /></Button>
                            </div>
                            <Image src={social.img} alt="youtube" className="h-full w-full object-cover" />
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
