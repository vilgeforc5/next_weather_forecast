import React, { ReactElement } from "react";
 
interface WeatherCardHeaderProps {
    icon: ReactElement;
    title: string;
}

export type IWeatherCardHeader = React.FC<WeatherCardHeaderProps>