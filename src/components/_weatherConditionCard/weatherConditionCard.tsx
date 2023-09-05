import { IconSun } from "../_weatherIcons/iconSun"

export const WeatherConditionCard = () => {
    return (
        <div className=" 
            w-full h-full rounded-lg  bg-slate-purple-gradient
            p-4 md:p-6 xl:p-8
             shadow-slate-950 shadow-lg
                grid grid-rows-3
            ">
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-x-1">
                    <IconSun  color="slate-500"/>
                    <p className="text-slate-200 text-xl">
                        Температура
                    </p>
                </div>
                <div className="text-slate-500">
                    14:20
                </div>
            </div>

            <div className="h-full row-span-2 grid grid-rows-2">
                <div className="flex items-center">
                    <p className="text-5xl inline-block text-slate-50">
                        13
                    </p>
                    <span className="text-lg place-self-start text-slate-200">
                        mm/h
                    </span>
                </div>
                <div className="flex justify-between items-center  gap-x-4">
                    <div className="text-slate-500">
                        {13-10}mm/h
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar-indicator">
                        </div>
                        {/* <div className="absolute left-[50%] border-solid border-t-orange-500 border-b-[12px] border-x-transparent border-x-[12px] border-t-0 ">
                        </div> */}
                    </div>
                    <div className="text-slate-500">
                        {13+10}mm/h
                    </div>
                </div>
            </div>
        </div>
    )
}