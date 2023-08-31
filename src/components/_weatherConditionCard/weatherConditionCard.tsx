
export const WeatherConditionCard = () => {
    return (
        <div className="    mt-4 
            w-full h-full rounded-lg  bg-slate-dark-gradient
            p-4 md:p-6 xl:p-8
            grid grid-cols-1 grid-rows-3 shadow-slate-950 shadow-lg
            ">
            <div className="text-slate-100 flex justify-between items-center">
                <p className="tracking-tighter stroke-gray-300">
                    logo
                </p>
                <p>
                    Wind
                </p>
            </div>
        </div>
    )
}