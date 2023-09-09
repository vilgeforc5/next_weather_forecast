import React from 'react'

interface DayPodcastProps {
    addOn: string;
    avgTemp: number;
    rainChance: number;
    snowChance: number;
    className?: string;

}
export const DayPodcast: React.FC<DayPodcastProps> = ({ addOn, avgTemp, rainChance, snowChance, className }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <p className='text-indigo-200 font-extralight text-sm md:text-base lg:text-lg'>
                {addOn}
            </p>
            <p className='mt-2 text-slate-200 font-light text-md md:text-lg lg:text-xl'>
                Средние показатели:
            </p>
            <ul className='text-slate-100 mt-1.5 md:mt-2 lg:mt-2.5'>
                <li className='flex justify-between text-md md:text-lg lg:text-xl'>
                    <span className=''>
                        Температура
                    </span>
                    <span className='text-lg md:text-xl lg:text-2xl'>
                        {avgTemp}
                        <span className='text-sm align-middle'>°C</span>
                    </span>
                </li>
                <li className='flex justify-between text-md md:text-lg lg:text-xl'>
                    <span className=''>
                        Вероятность дождя
                    </span>
                    <span className='text-lg md:text-xl lg:text-2xl'>
                        {rainChance}
                        <span className='text-sm align-middle'>%</span>
                    </span>
                </li>
                <li className='flex justify-between text-md md:text-lg lg:text-xl'>
                    <span className=''>
                        Вероятность снега
                    </span>
                    <span className='text-lg md:text-xl lg:text-2xl'>
                        {snowChance}
                        <span className='text-sm align-middle'>%</span>
                    </span>
                </li>
            </ul>
        </div>
    )
}
