import React, { ComponentProps, useLayoutEffect, useRef } from 'react'
import { IWeatherCardData } from './weatherCardData.types'
import { randomInteger } from '@/utils/randomInt'

export const WeatherCardData: IWeatherCardData = ({ dataNumerical, prefix, barColor, barLimits }) => {

    //  сдвигаю указатель на рандом расстояние +-1.5 длины, 
    // чтобы они не выглядели одинаково и типо чето посчитал))))) 
    const barRef = useRef<HTMLDivElement>(null)
    useLayoutEffect(() => {
        if(barRef.current) {
            const randomBarEpsilon = randomInteger(-150, 150)
            barRef.current.style.transform = `translate(${randomBarEpsilon}%, 0`
        }
    }, [dataNumerical, prefix, barColor, barLimits?.gap,barLimits?.max, barLimits?.min ])


    let barMinLimit, barMaxLimit;
    if (!barLimits) {
        barMinLimit = Math.floor(dataNumerical) - 20
        barMaxLimit = Math.floor(dataNumerical) + 20
    } else {
        ({ barMinLimit, barMaxLimit } = generateBarLimits(Math.floor(dataNumerical), barLimits))
    }

    return (
        <div className="h-full grid grid-rows-2">
            <div className="flex items-center my-2 md:my-3 lg:my-4">
                <p className="header-text_size inline-block text-slate-50">
                    {dataNumerical}
                    <span className="text-lg align-top text-slate-300 ml-0.5">
                        {prefix}
                    </span>
                </p>
            </div>
            <div className="flex justify-between items-center gap-x-2 md:gap-x-3 ">
                <div className="text-slate-500">
                    <div className="text-slate-500 flex flex-col sm:flex-row">
                        <span className='block text-center'>{barMinLimit} </span>
                        <span className='block text-center'> {prefix} </span>
                    </div>
                </div>
                <div className={`${barColor ? barColor : "gradient-blue-red-lr"}  w-full h-2 md:h-3 rounded-lg relative`}>
                    <div
                        ref={barRef}
                        className={`absolute top-0 
                                    left-[calc(50%-2.5px)] md:left-[calc(50%-3px)] lg:left-[calc(50%-3.5px)] xl:left-[calc(50%-4px)]
                                    border-x-[5px] md:border-x-[6px]  lg:border-x-[7px] xl:border-x-8
                                    border-t-[5px] md:border-t-[6px]  lg:border-t-[7px] xl:border-t-8
                                    border-solid border-t-slate-950 border-x-transparent  border-b-0
                                    transition-all
                        `}>
                    </div>
                </div>
                <div className="text-slate-500 flex flex-col sm:flex-row text-center">
                    <span className='block text-center'>{barMaxLimit} </span>
                    <span className='block text-center'> {prefix} </span>
                </div>
            </div>
        </div>
    )
}

function generateBarLimits(dataNumerical: number, barLimits: ComponentProps<IWeatherCardData>["barLimits"] & {}) {
    const barMinLimit = (dataNumerical - barLimits.gap) < barLimits.min ? barLimits.min : dataNumerical - barLimits.gap;
    const barMaxLimit = (dataNumerical + barLimits.gap) > barLimits.max ? barLimits.max : dataNumerical + barLimits.gap
    return { barMinLimit, barMaxLimit }
}