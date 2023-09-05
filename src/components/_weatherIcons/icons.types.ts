import React from "react";

interface IconProps { 
    color: string;
}


/**
 * @param color tailwindcss correct color (slate-500 etc)
 */
export type IconWeather = React.FC <IconProps>