
export default function projects() {
    const projects = [
        {
            projectCount: "120",
            porjectType: "Digital",
            whichTypeProject: "Products"
        },
        {
            projectCount: "40",
            porjectType: "Open Source",
            whichTypeProject: "Projects"
        },
        {
            projectCount: "10M",
            porjectType: "Lines of",
            whichTypeProject: "Code"
        },

    ]
    return (
        <div className="w-full mb-20 2xl:h-80 xl:flex xl:h-52">
            <div className="flex lg:flex-row flex-col px-4 2xl:gap-56 lg:w-full xl:items-center xl:h-full lg:justify-center gap-12 lg:gap-32">
                {projects.map((data, index) => (
                    <div className="flex gap-5" key={index}>
                        <div className="flex">
                            <h2 className="text-red-500 tracking-[-1px] text-5xl 2xl:text-7xl font-medium">{data.projectCount}</h2>
                            {index == 2 ? null : <span className="text-red-500 font-extrabold text-3xl">+</span>}
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-xl font-bold 2xl:text-2xl">{data.porjectType}</h2>
                            <h2 className="text-xl 2xl:text-2xl font-bold">{data.whichTypeProject}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <div className="h-52 w-52 2xl:w-80 rounded-l-xl 2xl:h-80 bg-[#6E7FD1] hidden xl:flex">

            </div>
        </div>
    )
}
