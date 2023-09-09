import React, { Suspense, useEffect, useState } from "react";
import { DayPodcast } from "./_dayPodcast/dayPodcast"
import { DayCards } from "./dayCards/dayCards"
import Skeleton from "react-loading-skeleton";
import { defaultSkeletonStyles } from "@/utils/defaultSkeletonStyles";
import { useSelector } from "react-redux";
import { StoreType } from "@/redux/store";
import { useGetFutureForecastQuery } from "@/redux/services/weatherForecast/weatherForecastApi";
import { reverseString } from "@/utils/reverseString";
import { ForecastDays } from "@/types/forecastApiTypes";
import { ArrayElement } from "@/types/types";

const DayGraphLazy = React.lazy(() => import("./_dayGraph/dayGraph"));
export type ForecastDayWithActive = ArrayElement<ForecastDays> & { isActive: boolean }

export const ForecastSection = () => {
    const currentLocation = useSelector((state: StoreType) => state.currentLocation)

    const { data: forecastData, isSuccess } = useGetFutureForecastQuery({
        location: reverseString(currentLocation.pos),
        days: 3
    },
        {
            skip: currentLocation.name === ""
        })

    const [days, setDays] = useState<ForecastDayWithActive[] | undefined>(undefined)

    useEffect(() => {
        if (isSuccess && forecastData.forecast) {
            const daysActive = daysWithActive(forecastData.forecast.forecastday)
            setDays(daysActive)
        }
    }, [isSuccess, forecastData])


    function setActive(dayDate: ForecastDayWithActive["date"]) {
        setDays((prev) => prev?.map(day => {
            if (day.date === dayDate) {
                return ({
                    ...day,
                    isActive: true
                })
            }
            return ({
                ...day,
                isActive: false
            })
        }))
    }

    const activeDay = days?.filter(day => day.isActive)[0]
    return (
        <div
            className="w-full h-full mt-3 rounded-lg 
                    bg-slate-purple-gradient
                    flex flex-col lg:flex-row
                    p-1 md:p-2 lg:p-3
                    "
        >
            {
                !activeDay ?
                    <div className=" h-full w-full">
                        <Skeleton {...defaultSkeletonStyles} className="h-full  w-full"/> 
                    </div> :
                    <>
                        <DayPodcast
                            className="max-lg:order-3 mt-2 lg:mt-0 pr-1 md:pr-1.5 lg:pr-2.5 my-2 lg:basis-[30%]"
                            avgTemp={activeDay.day.avgtemp_c}
                            addOn={`${activeDay.date} | ${activeDay.day.condition.text}`}
                            rainChance={activeDay.day.daily_chance_of_rain}
                            snowChance={activeDay.day.daily_chance_of_snow}
                        />
                        <div className="bg-indigo-950 p-1 md:p-2 lg:p-3 flex-1 flex flex-col">
                            <Suspense fallback={<Skeleton {...defaultSkeletonStyles} className="h-52 sm:h-64 lg:h-72 xl:h-96 w-full " />}>
                                <DayGraphLazy hours={activeDay.hour} />
                            </Suspense>
                            <DayCards setActive={setActive} days={days} />
                        </div>
                    </>
            }
        </div>
    )
}


function daysWithActive(days: ForecastDays, index = 0): ForecastDayWithActive[] {
    return days.map((day, i) => {
        if (i !== index) {
            return ({
                ...day,
                isActive: false
            })
        } else {
            return (
                {
                    ...day,
                    isActive: true
                }
            )
        }
    })
}