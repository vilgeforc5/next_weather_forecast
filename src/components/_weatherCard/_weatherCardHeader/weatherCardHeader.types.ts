import React, { ReactElement, ReactNode } from "react";
 
interface WeatherCardHeaderProps {
    icon: ReactElement;
    title: string;
}

export type IWeatherCardHeader = React.FC<WeatherCardHeaderProps>