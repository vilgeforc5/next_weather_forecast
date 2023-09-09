import { IconWeather } from "./icons.types";

export const IconWind: IconWeather = ({ color }) => {
    return (
        <svg
            className={`h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7  text-${color}`}
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
        >
            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" /> 
        </svg>

    )
}