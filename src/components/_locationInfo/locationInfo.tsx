import React from "react"
import { useSelector } from "react-redux";
import formatcoords from "formatcoords";
import { selectCurrentLocation } from "@/redux/features/currentLocation/currentLocationSlice";
import Skeleton from "react-loading-skeleton";
import { defaultSkeletonStyles } from "@/utils/defaultSkeletonStyles";

export const LocationInfo: React.FC = () => {
    const myLocation = useSelector(selectCurrentLocation);
    const [lat, lon] = myLocation.pos.split(" ").map(item => Number(item))

    return (
        <div className="text-indigo-300 text-lg md:text-xl p-1.5 font-semibold tracking-wide md:pt-0 mb-1.5 md:mb-2">
            <p className="mr-2.5 tracking-wider">  
                { myLocation.name === "" ? 
                    <Skeleton width={"200px"} height={"28px"} {...defaultSkeletonStyles} /> : 
                    myLocation.name
                } 
            </p>
            <span className="text-sm font-light text-indigo-300 select-all">
                {myLocation.name.length > 0 && !Number.isNaN(lat) && !Number.isNaN(lon) ?
                    formatcoords(lat, lon).format() :
                    <Skeleton width={"250px"} height={"28px"} {...defaultSkeletonStyles} className="h-6 w-12 " />
                }
            </span>
        </div>
    )
}