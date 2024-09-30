
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
        <div className="w-full pl-4">
            <div className="flex flex-col gap-12">
                {projects.map((data, index) => (
                    <div className="flex gap-5" key={index}>
                        <div className="flex">
                            <h2 className="text-red-500 tracking-[-1px] text-5xl font-medium">{data.projectCount}</h2>
                            {index==2?null: <span className="text-red-500 font-extrabold text-3xl">+</span>}
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">{data.porjectType}</h2>
                            <h2 className="text-xl font-bold">{data.whichTypeProject}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
