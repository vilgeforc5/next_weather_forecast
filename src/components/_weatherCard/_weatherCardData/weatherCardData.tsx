import React from 'react'
import { IWeatherCardData } from './weatherCardData.types'

export const WeatherCardData: IWeatherCardData = ({ dataNumerical, prefix }) => {
    return (
        <div className="h-full grid grid-rows-2">
            <div className="flex items-center">
                <p className="text-5xl inline-block text-slate-50">
                    {dataNumerical}
                </p>
                <span className="text-lg place-self-start text-slate-200">
                    {prefix}
                </span>
            </div>
            <div className="flex justify-between items-center  gap-x-4">
                <div className="text-slate-500">
                    {dataNumerical-20}{prefix}
                </div>
                <div className="progress-bar-container">
                    <div className="progress-bar-indicator ">
                    </div>
                    {/* <div className="absolute left-[50%] border-solid border-t-orange-500 border-b-[12px] border-x-transparent border-x-[12px] border-t-0 ">
                    </div> */}
                </div>
                <div className="text-slate-500">
                    {dataNumerical+20}{prefix}
                </div>
            </div>
        </div>
    )
}
