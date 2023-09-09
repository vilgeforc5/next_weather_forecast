import React, { ComponentProps } from 'react'
import { ForecastDayWithActive } from '../forecastSection';
import Skeleton from 'react-loading-skeleton';
import { defaultSkeletonStyles } from '@/utils/defaultSkeletonStyles';
import { ArrayElement } from '@/types/types';

interface DayCardsProps {
    days: ForecastDayWithActive[] | undefined;
    setActive: (dayDate: string) => void;
}
export const DayCards: React.FC<DayCardsProps> = ({ days, setActive }) => {
    return (
        <div
            className='w-full  flex justify-center items-center py-1 md:py-1.5
                      mt-2 gap-x-1 md:gap-x-1.5 
                      h-auto '
        >
            {days === undefined ?
                <div className='h-full w-full '>
                    <Skeleton {...defaultSkeletonStyles} className='h-full basis-48' />
                </div> :
                days.map(day => {
                    return <DayCard setActive={setActive} key={day.date} day={day} />
                })
            }
        </div>
    )
}

interface DayCardProps {
    day: ArrayElement<NonNullable<ComponentProps<typeof DayCards>["days"]>>;
    setActive: ComponentProps<typeof DayCards>["setActive"]
}

const DayCard: React.FC<DayCardProps> = ({ day, setActive, }) => {
    return (
        <div
            className={`${day.isActive ? "bg-blue-900" : "bg-blue-950 hover:bg-blue-900/50"} 
                        cursor-pointer transition-all shadow-md 
                        hover:shadow-blue-900/50 hover:-translate-y-2
                        basis-48 h-full rounded-sm  relative z-10 flex flex-col align-center justify-center`}
            onClick={() => {
                if (!day.isActive) {
                    setActive(day.date)
                }
            }}
        >
            <div className='p-1.5 md:p-2 lg:p-2.5 grow-1 h-full  grid items-center'>
                <p className={`text-blue-300 text-center tracking-wide leading-5 text-sm md:text-base`}>
                    {day.date}
                </p>
                <div className='w-10 h-10 mx-auto mt-2'>
                    <img src={day.day.condition.icon} alt='weather icon' />
                </div>
                <p className='text-md md:text-lg lg:text-xl text-center text-slate-300 mt-1'>
                    {day.day.maxtemp_c}°C
                </p>
                <p className='text-md md:text-lg lg:text-xl text-center text-slate-300 mb-1 mt-0.5'>
                    {day.day.maxwind_kph}км/ч
                </p>
            </div>
            <div className='bg-sky-700 mt-auto mb-0 w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill={`${day.isActive ? "rgb(99, 102, 241)" : "none"}`} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
            </div>
        </div>
    )
}