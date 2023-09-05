import React from 'react'
import { IWeatherCardHeader } from './weatherCardHeader.types'

export const WeatherCardHeader: IWeatherCardHeader = ({ icon, title }) => {
    return (
        <div className="flex items-center justify-start h-full w-full gap-x-1">
            {icon}
            <p className="text-slate-200 text-base md:text-lg lg:text-xl 2xl:text-2xl">
                {title}
            </p>
        </div>

    )
}
