import Dedication from "../assets/svg/dedication.svg"
import SmartWork from "../assets/svg/smartWork.svg"
import Intelligence from "../assets/svg/intelligence.svg"
import Image from "next/image"
export default function excellence() {
    const excellenceData = [
        {
            numFor: "01",
            exce: "Dedication",
            svg: Dedication,
        },
        {
            numFor: "02",
            exce: "Smart Work",
            svg: SmartWork,
        },
        {
            numFor: "03",
            exce: "Intelligence",
            svg: Intelligence,
        },
    ]
    return (
        <div className="w-full px-5 p-1 md:grid md:grid-cols-2 max-w-[1400px] mx-auto xl:my-32 xl:grid-cols-3 my-24">
            {excellenceData.map((item, index) => <div key={index} className={`w-full md:w-[90%] xl:justify-self-center mb-10 ${index==1&&"md:justify-self-end xl:justify-self-start"}`}>
                <div className="flex w-full justify-between border-b-1 border-gray-300 py-7 mb-7">
                    <div>
                        <p className="text-orange-600 font-semibold text-md">{item.numFor}</p>
                        <h2 className="text-xl font-bold 2xl:text-3xl">{item.exce}</h2>
                    </div>
                    <Image src={item.svg} alt="Dedication" className="w-14" />
                </div>
                <div>
                    <p className="text-gray-400 font-semibold">Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat.</p>
                </div>
            </div>)}
        </div>
    )
}
