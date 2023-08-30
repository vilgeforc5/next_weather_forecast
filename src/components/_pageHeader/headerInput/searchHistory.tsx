import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLocation } from "@/redux/features/currentLocation/currentLocationSlice";
import { clearHistory, selectAllHistoryReversed } from "@/redux/features/searchHistory/searchHistorySlice";
import { DispatchType } from "@/redux/store";

export const SearchHistory = () => {
    const dispatch = useDispatch <DispatchType>()
    const historyList = useSelector(selectAllHistoryReversed)

    if (historyList.length > 0)
        return (
            <>
                <div className="flex justify-between bg-zinc-100
                                sticky top-0 p-1.5 md:p-2 
                ">
                    <h3 className="inline-block  font-semibold text-zinc-700 text-base  lg:text-lg ">
                        История поиска
                    </h3>
                    <svg 
                        className="h-5 w-5 md:w-6 md:h-6 cursor-pointer 
                                 text-zinc-500 hover:text-zinc-600 mr-1"
                        onClick={() => {
                            dispatch(clearHistory())

                        }}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>
                <ul className="py-0.5   ">
                    {historyList.map(city =>
                        <li 
                            className="p-1 pl-3 text-sm md:text-base lg:text-lg  cursor-pointer
                                     hover:text-slate-900 text-slate-500"
                            onClick={() => {
                                dispatch(setCurrentLocation(city))
                            }}
                            key={city.pos}
                        >
                            {city.name}
                        </li>
                    )}
                </ul>

            </>
        )
    else
        return <></>
}